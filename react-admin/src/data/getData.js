
export async function fetchRoomsData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/rooms', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchBuildsData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/buildings', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchTemperatureData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/temperatureSensors', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchNoiseData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/soundSensors', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchPeopleData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchPeopleDataActive() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchPeopleDataInactive() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=0', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchPeopleData5Years() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const activePeople = data.filter((person) => person.ipt_desde_in >= "2009")

    return activePeople.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchPeopleDataProfessors() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const activePeople = data.filter((person) => person.CAT_PRO.includes("Professor"))

    return activePeople.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}



export async function fetchCoursesData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/courses', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchClassesData() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/classes', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchClassesDataByDay(day) {
  try {
    const response = await fetch(`https://smartcampus.ci2.ipt.pt/classes?day=${day}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

