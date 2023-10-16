import axios from 'axios'

export async function fetchRoomsData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/rooms', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchBuildsData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/buildings', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchTemperatureData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/temperatureSensors', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchNoiseData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/soundSensors', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

//post data in json server (isOccuipid to 1)
export async function handleReserveRoom(room) {
  try {
    const response = await fetch(`https://smartcampus.ci2.ipt.pt/rooms?id=${room.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
    })

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

