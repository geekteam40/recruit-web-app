const toForm = () => {
  location.pathname = '/form.html'
}

const getUserId = () => {
  const cookies = document.cookie
  const cookiesArray = cookies.split(';')
  for (let i = 0; i < cookiesArray.length; i++) {
    const array = cookiesArray[i].split('=')
    if (array[0] == 'userId') {
      return array[1]
    }
  }
}

const fetchData = async () => {
  const userId = getUserId()
  const res = await fetch(`http://localhost:8000/memo?userId=${userId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await res.json()
  const largeData = json.largeData
  const title = sessionStorage.getItem('title')
  for (let i = 0; i < largeData.length; i++) {
    if (largeData[i].title === title) {
      const smallData = largeData[i].smallData
      for (let j = 0; j < smallData.length; j++) {
        const es = document.createElement('li')
        es.addEventListener('click', () => {
          sessionStorage.setItem('title', largeData[i].title)
          sessionStorage.setItem('length', smallData[j].length)
          location.pathname = '/form.html'
        })
        const esLabel = document.createElement('div')
        esLabel.classList.add('list-label')
        esLabel.textContent = `${smallData[j].length} words`
        es.appendChild(esLabel)
        const esContent = document.createElement('div')
        esContent.classList.add('list-content')
        esContent.textContent = smallData[j].text
        es.appendChild(esContent)
        list.appendChild(es)
      }
    }
  }
}

fetchData()
