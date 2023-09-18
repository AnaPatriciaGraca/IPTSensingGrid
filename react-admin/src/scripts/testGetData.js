import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState({});
  const [allData, setAllData] = useState({});
  const professors = ['Carlos Perquilhas', 'Manuel Barros', 'Luís Merca', 'José Ramos','Francisco Nunes', 'António Manso', 'Ana Cristina Lopes', 'Raúl Monteiro', 'Paulo Santos', 'Luís Grilo', 'José Casimiro Pereira', 'Carlos Queiroz', 'Casimiro Batista', 'Luís Oliveira', 'António Manso', 'Luís Almeida']
  const [professorName, setProfessorName] = useState(professors[0]);
  const resourceUrls = [
    'http://localhost:3001/LEI1TA',
    'http://localhost:3001/LEI1TB',
    'http://localhost:3001/LEI1TC',
    'http://localhost:3001/LEI2TA',
    'http://localhost:3001/LEI2TB',
    'http://localhost:3001/LEI3TA',
    'http://localhost:3001/LEI3TB',
  ];
  const [selectedResource, setSelectedResource] = useState(resourceUrls[0]);
  let professorStartIndex = -1;
  let professorEndIndex = -1;

  useEffect(() => {
    // Axios GET requests
    const axiosRequests = resourceUrls.map((url) => axios.get(url));
  
    // Parallel requests
    Promise.all(axiosRequests)
      .then((responses) => {
        const allData = {};
  
        responses.forEach((response, index) => {
          const resourceName = resourceUrls[index];
          allData[resourceName] = response.data;
        });
  
        setAllData(allData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [resourceUrls]);
  
  useEffect(() => {
    // Set the `data` variable to a specific resource
    if (selectedResource && allData[selectedResource]) {
      setData(allData[selectedResource]);
    }
  }, [allData, selectedResource]);
  

  //dropdown selection change to request
  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

  const handleProfessorChange = (event) => {
    setProfessorName(event.target.value)
  }

  //find name of building with regex
  const findNameBuilding = (inputString) =>{
    const regexPattern = /^[A-Q]\d{3}(?:\/[A-Q]\d{3})?$/;
    return regexPattern.test(inputString);
  }

  const findStartIndex = (iteration, dataArray) => {
    let countEmpty = 0
    for (let i=iteration-1; i > 0; i--) {

        //find empty cells between schedules (for first classes and so)
        if (dataArray[i] === ''){
            countEmpty++;
            if (countEmpty === 2){
                if (dataArray[i+1] !== ''){
                    return i+1;
                }else{
                    return i+2;
                }
                
            }
        }

        //find name of building of previous class
        if (findNameBuilding(dataArray[i])){
            if(dataArray[i+1] !== ''){
                return i + 1;
            }else{
                return i + 2;
            }
        }
    }
  }

  const professorHoursDay = (professorName, dayData) => {
    //careful with the data that's not available yet because of the asynchronous request
    if (!dayData) {
        return 0; // Return an appropriate default value
    }
    
    // let tercaArray = data['E'];
    let horariosArray = data['C'];
    let numberClasses = 0;
    let totalHours = 0;
    
    // Find the start and end times of the professor's classes 
    for (let i = 0; i < dayData.length; i++) {
        if (dayData[i] === professorName) {
            numberClasses++;
            professorStartIndex = findStartIndex(i, dayData); 
          //find end Index          
          if (dayData[i+1] === ''){
            professorEndIndex = i + 2;
          }else {
            professorEndIndex = i + 1;
          }
          
        }

        // calc total hours worked by the professor
        if (professorStartIndex !== -1 && professorEndIndex !== -1) {
            const startTime = horariosArray[professorStartIndex];
            const endTime = horariosArray[professorEndIndex];
        
            const [startHour, startMinute] = startTime.split('-')[0].trim().split('.').map(Number);
            const [endHour, endMinute] = endTime.split('-')[1].trim().split('.').map(Number);
        
            totalHours += endHour - startHour + (endMinute - startMinute) / 60;
            professorEndIndex = -1;
            professorStartIndex = -1;
    
        }
    }
    if (numberClasses !== 0){
        return totalHours;
    } else { //classes not found for the professor searched
        return 0;
    }

  }

  const professorHoursWeek = (professorName) => {
    if (!data){return 0}
    let totalHours = professorHoursDay(professorName, data['D']);
    totalHours += professorHoursDay(professorName, data['E']);
    totalHours += professorHoursDay(professorName, data['F']);
    totalHours += professorHoursDay(professorName, data['G']);
    totalHours += professorHoursDay(professorName, data['H']);
    totalHours += professorHoursDay(professorName, data['I']);

    return totalHours;
  }

  const professorHoursAllClass = (professorName) => {
    let totalHours = 0
    
        setSelectedResource(resourceUrls[2])
        // totalHours += professorHoursWeek(professorName)

    return totalHours
  }

  const hoursWeek = professorHoursWeek(professorName);
  // const allHoursClass = professorHoursAllClass(professorName);

  return (
    <div>
        
      <h2>Data from JSON Server</h2>
      {/* Dropdown to select resource */}
      <label htmlFor="resourceSelect">Select a resource: </label>
      <select id="resourceSelect" value={selectedResource} onChange={handleResourceChange}>
        {resourceUrls.map((resourceUrl, index) => (
          <option key={index} value={resourceUrl}>
            {resourceUrl}
          </option>
        ))}
      </select>
      <label htmlFor="professorSelect">Select a professor: </label>
      <select id='professorSelect' value={professorName} onChange={handleProfessorChange} >
        {professors.map((professor, index) => (
            <option key={index} value={professor}>
                {professor}
            </option>
        ))}
        
      </select>
      <h3>Horas trabalhadas na turma selecionada</h3>
      <p>{professorName} trabalhou {hoursWeek} horas.</p>   
      <h3>Horas trabalhadas em todas as turmas</h3>
      {/* <p>{professorName} trabalhou {allHoursClass} horas.</p>  */}
      {/* <GetScheduleData dataFetched={data} professor={professorName} /> */}

    </div>
  );
};

export default YourComponent;
