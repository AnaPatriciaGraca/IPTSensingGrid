import { useState, useEffect } from 'react' 
import TotalOccupiedRooms from '../components/TotalFreeRooms' 

const UsedRoomData = ({ rooms, classes }) => {
  const [data, setData] = useState([]) 


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
  


//transform the data for the graph
  useEffect(() => {
    const categories = {} 

    // Function to process the data and build the usedRooms structure
    const processData = () => {
      const usedRooms = []
      let isRoomUsed = ""

      rooms.forEach((room) => {
        isRoomUsed = isRoomInUse(room.name)
        // console.log(room.name, isRoomUsed)

        if (isRoomUsed) {
          const blockName = room.name.charAt(0) 
          const category = getCategory(room['function.']) 

          if (!categories[blockName]) {
            categories[blockName] = {
              bloco: blockName,
            } 
          }

          if (!categories[blockName][category]) {
            categories[blockName][category] = 1 
          } else {
            categories[blockName][category] += 1 
          }
        }
      }) 

      // Convert categories to an array
      for (const blockName in categories) {
        if (categories.hasOwnProperty(blockName)) {
          usedRooms.push(categories[blockName]) 
        }
      }

      // Update the state with the processed data
      setData(usedRooms) 
    } 

    // Function to determine the category based on room.function
    const getCategory = (functionName) => {
      if (
        functionName.toLowerCase().includes('sala de aula') ||
        functionName.toLowerCase().includes('sala de aulas')
      ) {
        return 'sala de aula' 
      } else if (functionName.toLowerCase().startsWith('laboratório')) {
        return 'laboratório' 
      } else {
        return 'outro' 
      }
    } 

    
    processData() 
  }, [rooms]) 


 

  return <TotalOccupiedRooms data={data} /> 
} 

export default UsedRoomData 
