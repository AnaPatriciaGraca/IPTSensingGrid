import { useState, useEffect } from 'react';
import TotalOccupiedRooms from '../components/TotalFreeRooms';

const UsedRoomData = ({ rooms }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const categories = {};

    // Function to process the data and build the usedRooms structure
    const processData = () => {
      const usedRooms = [];

      rooms.forEach((room) => {
        if (room.isOccupied === 1) {
          const blockName = room.name.charAt(0);
          const category = getCategory(room['function.']);

          if (!categories[blockName]) {
            categories[blockName] = {
              bloco: blockName,
            };
          }

          if (!categories[blockName][category]) {
            categories[blockName][category] = 1;
          } else {
            categories[blockName][category] += 1;
          }
        }
      });

      // Convert categories to an array
      for (const blockName in categories) {
        if (categories.hasOwnProperty(blockName)) {
          usedRooms.push(categories[blockName]);
        }
      }

      // Update the state with the processed data
      setData(usedRooms);
    };

    // Function to determine the category based on room.function
    const getCategory = (functionName) => {
      if (
        functionName.toLowerCase().includes('sala de aula') ||
        functionName.toLowerCase().includes('sala de aulas')
      ) {
        return 'sala de aula';
      } else if (functionName.toLowerCase().startsWith('laboratório')) {
        return 'laboratório';
      } else {
        return 'outro';
      }
    };

    
    processData();
  }, [rooms]);

  console.log('Used Room Data: ', data);

  // You can use the 'data' state as needed in your application

  return <TotalOccupiedRooms data={data} />;
};

export default UsedRoomData;
