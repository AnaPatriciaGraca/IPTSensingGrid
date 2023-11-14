import { useState, useEffect } from 'react';
import TreeChart from '../components/TreeChart';

const FreeRoomChart = ({ data, classes }) => {
  const [freeRooms, setFreeRooms] = useState({
    name: 'Salas',
    children: [],
  });
  const categories = {};
  let categoryName = '';


//verify if the room is in use
const isRoomInUse = (roomName) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDay() === 0 ? 7 : currentDate.getDay()

  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`


  for (const classInfo of  classes) {
    if (classInfo.room === roomName && classInfo.day === currentDay) {
      const startTime = classInfo.start_time 
      const endTime = classInfo.end_time 


      if (isTimeBetween(currentTime, startTime, endTime)) {
        return true  // Room is in use
      }
    }
  }

  return false  // Room is not in use
} 

const isTimeBetween = (currentTime, startTime, endTime) => {
  return currentTime >= startTime && currentTime <= endTime 
} 



  useEffect(() => {
    let roomInUse=""

    const processData = () => {
      data.forEach((room) => {
      roomInUse = isRoomInUse(room.name) 

        if (!roomInUse) {
          categoryName = room.function
          //debug beacause some room names are arrays
          const firstLetter = typeof room.name === 'string' ? room.name.charAt(0) : ''
          const blockName = `Bloco ${firstLetter}`
          
          if (!categories[categoryName]) {
            categories[categoryName] = {
              name: categoryName,
              children: [],
            };
          }

          const existingEntry = categories[categoryName].children.find(
            (entry) => entry.name === blockName && entry.category === categoryName
          );

          if (existingEntry) {
            existingEntry.loc += 1;
          } else {
            const roomEntry = {
              name: blockName,
              category: categoryName,
              loc: 1,
            };

            categories[categoryName].children.push(roomEntry);
          }
        }
      });

      const updatedFreeRooms = {
        name: 'Salas',
        children: Object.values(categories),
      };

      setFreeRooms(updatedFreeRooms);
    };

    processData();
  }, [data]);

  // console.log(1)

  return <TreeChart data={freeRooms} />;
};

export default FreeRoomChart;
