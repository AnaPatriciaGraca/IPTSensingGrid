import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetScheduleData = () => {
  const [data, setData] = useState([]);
  let professorStartIndex = -1;
  let professorEndIndex = -1;

  useEffect(() => {
    // Define the URL of your JSON Server resource
    const apiUrl = 'http://localhost:3001/LEI1TA';
  
    // GET request to the JSON Server using Axios
    axios.get(apiUrl)
      .then((response) => {
        // Set the data in the component state
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //find name of building
  const findNameBuilding = (inputString) =>{
    const regexPattern = /^[A-Q]\d{3}(?:\/[A-Q]\d{3})?$/;
    return regexPattern.test(inputString);
  }

  const findStartIndex = (iteration, dataArray) => {
    let countEmpty = 0
    let itera = 0
    for (let i=iteration-1; i > 0; i--) {
        itera++;

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
        if (findNameBuilding(dataArray[i])){
            if(dataArray[i+1] !== ''){
                return i + 1;
            }else{
                return i + 2;
            }
        }
    }
  }

  const calculateProfessorHours =(professorName) => {
    //data is not available yet because of the asynchronous request
    if (!data || !data['G'] || !data['C']) {
        return 0; // Return an appropriate default value
    }
    
    let tercaArray = data['G'];
    let horariosArray = data['C'];
    
    // Find the start and end times of the professor's classes in D Array
    for (let i = 0; i < tercaArray.length; i++) {
        if (tercaArray[i] === professorName) {
            professorStartIndex = findStartIndex(i, tercaArray); 
          
          if (tercaArray[i+1] === ''){
            professorEndIndex = i + 2;
          }else {
            professorEndIndex = i + 1;
          }
          
        }
    }

    // total hours worked by the professor
    if (professorStartIndex !== -1 && professorEndIndex !== -1) {
      const startTime = horariosArray[professorStartIndex];
      const endTime = horariosArray[professorEndIndex];
  
      const [startHour, startMinute] = startTime.split('-')[0].trim().split('.').map(Number);
      const [endHour, endMinute] = endTime.split('-')[1].trim().split('.').map(Number);
  
      const totalHours = endHour - startHour + (endMinute - startMinute) / 60;
      return totalHours;

    } else {
      return 0; //professor not found
    }
  }
  
  // Example usage:
  const professorName = 'Pedro Santos';
  const totalHours = calculateProfessorHours(professorName);
  

  return (
    <div>
      <h2>Data from JSON Server</h2>
      <div>
        <h3>C Array</h3>
        <ul>
          {data['C'] && data['C'].map((item, index) => (
            <li key={index}>{index} - {item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Terça Array</h3>
        <ul>
          {data['G'] && data['G'].map((item, index) => (
            <li key={index}>{index} - {item}</li>
          ))}
        </ul>
      </div>
      <div>Hours</div>
      <p>Start: {professorStartIndex}   End: {professorEndIndex}</p>
      <p>{professorName}</p> 
      <p>Worked for {totalHours} hours.</p>
    </div>
  );
};

export default GetScheduleData;
