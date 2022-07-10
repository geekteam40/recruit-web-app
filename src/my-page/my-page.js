const list = document.getElementById('list')

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
  for (let i = 0; i < largeData.length; i++) {
    const es = document.createElement('li')
    es.addEventListener('click', () => {
      sessionStorage.setItem('title', largeData[i].title)
      location.pathname = '/detail.html'
    })
    es.textContent = largeData[i].title
    list.appendChild(es)
  }
}

fetchData()
