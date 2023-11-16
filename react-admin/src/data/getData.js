//rooms data
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

//rooms data by Name
export async function fetchRoomDataByName(roomName) {
  try {
    const response = await fetch(`https://smartcampus.ci2.ipt.pt/rooms?name=${roomName}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}





//buildings data
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

//temperature data
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

//noise data
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

//people data
export async function fetchPeopleData() {
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
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

//active people data
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

//inactive people data
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

//people hired last 5 years data
export async function fetchPeopleData10Years() {
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
    const activePeople = data.filter((person) => person.ipt_desde_in >= "2013")

    return activePeople.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

//total professors
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

//total professors with term
export async function fetchPeopleDataProfessorsTerm() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=1&vinculo_tipo=termo', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const activePeopleTerm = data.filter((person) => person.CAT_PRO.includes("Professor"))

    return activePeopleTerm.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
//total workers that aren't professors with term
export async function fetchPeopleDataWorkersTerm() {
  try {
    const response = await fetch('https://smartcampus.ci2.ipt.pt/people?vinculo_ativo=1&vinculo_tipo=termo', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const activePeopleTerm = data.filter((person) => !person.CAT_PRO.includes("Professor"))

    return activePeopleTerm.length

  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

//courses data
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

//classes data
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

//classes today
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

//classes building I
export async function fetchClassesBuildingI() {
  try {
    const response = await fetch(`https://smartcampus.ci2.ipt.pt/classes?room_like=I`, {
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
