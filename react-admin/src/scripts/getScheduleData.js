import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetScheduleData = (dataFetched) => {
//   const [data, setData] = useState([dataFetched]);
  let professorStartIndex = -1;
  let professorEndIndex = -1;
  const professores = ['Carlos Perquilhas', 'Manuel Barros', 'Luís Merca', 'José Ramos', 'Francisco Nunes', 'António Manso', 'Ana Cristina Lopes', 'Raúl Monteiro', 'Paulo Santos', 'Luís Grilo', 'José Casimiro Pereira', 'Carlos Queiroz', 'Casimiro Batista', 'Luís Oliveira', 'António Manso', 'Luís Almeida']
  const [professorName, setProfessorName] = useState('Carlos Perquilhas');
    const data = dataFetched;
    console.log(data.dataFetched['E'])

  const handleSelectChange = (e) => {
    setProfessorName(e.target.value);
  };

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
    let horariosArray = data.dataFetched['C'];
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
    let totalHours = professorHoursDay(professorName, data.dataFetched['D']);
    console.log('Segunda horas: ' + totalHours)
    totalHours += professorHoursDay(professorName, data.dataFetched['E']);
    totalHours += professorHoursDay(professorName, data.dataFetched['F']);
    totalHours += professorHoursDay(professorName, data.dataFetched['G']);
    totalHours += professorHoursDay(professorName, data.dataFetched['H']);
    totalHours += professorHoursDay(professorName, data.dataFetched['I']);

    return totalHours;
  }

  const hoursWeek = professorHoursWeek(professorName);
  

  return (
    <div>
        <h3>Hours</h3>
      <select value={professorName} onChange={handleSelectChange}>
        <option value="">Selecionar professor</option>
        {professores.map((professor, index) => (
          <option key={index} value={professor}>
            {professor}
          </option>
        ))}
      </select>
      <p>{professorName} trabalhou {hoursWeek} horas.</p>      
    </div>
  );
};

export default GetScheduleData;
