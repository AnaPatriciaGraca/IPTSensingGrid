import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetScheduleData from './getScheduleData';

const YourComponent = () => {
  const [data, setData] = useState({});
  const [allData, setAllData] = useState({});
  const professores = ['Carlos Perquilhas', 'Manuel Barros', 'Luís Merca', 'José Ramos','Francisco Nunes', 'António Manso', 'Ana Cristina Lopes', 'Raúl Monteiro', 'Paulo Santos', 'Luís Grilo', 'José Casimiro Pereira', 'Carlos Queiroz', 'Casimiro Batista', 'Luís Oliveira', 'António Manso', 'Luís Almeida']
  const [professorName, setProfessorName] = useState('Carlos Perquilhas');

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

  useEffect(() => {
    //Axios GET requests
    const axiosRequests = resourceUrls.map((url) => axios.get(url));

    //parallel requests
    Promise.all(axiosRequests)
      .then((responses) => {
        const allData = {};

        responses.forEach((response, index) => {
          const resourceName = resourceUrls[index];
          allData[resourceName] = response.data;
        });

        setAllData(allData);

        setData(allData[selectedResource]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedResource]); 

  //dropdown selection change to request
  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

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
      
      <GetScheduleData dataFetched={data} />

      {/* Render the specific data
      <h3>Data for selected resource: {selectedResource}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default YourComponent;
