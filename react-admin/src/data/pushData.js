import { fetchRoomDataByName } from './getData'



export async function updateRoomOnServer(updatedRoom) {
  try {
    // Fetch the existing room data 
    const existingRoomDataArray = await fetchRoomDataByName(updatedRoom.name)
    const existingRoomData = existingRoomDataArray.length > 0 ? existingRoomDataArray[0] : null;

    if (!existingRoomData) {
      throw new Error('Room not found on the server.');
    }

    existingRoomData.newProperty = existingRoomData.newProperty || {};

    // Merge properties from updatedRoom.reservas into existingRoomData.newProperty
    existingRoomData.reservas = {
      ...existingRoomData.newProperty,
      ...updatedRoom.reservas,
    };

    
 

    // Make the PUT request with the mergedRoom data
    const response = await fetch(`https://smartcampus.ci2.ipt.pt/rooms/${existingRoomData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you may need, such as authentication headers
      },
      body: JSON.stringify(existingRoomData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const data = await response.json();
    console.log('Room updated on the server:', existingRoomData);

    return existingRoomData; // Optionally return the updated data from the server
  } catch (error) {
    console.error('Error updating room on the server:', error);
    throw error; // Propagate the error for further handling if needed
  }
}
