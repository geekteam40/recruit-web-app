const list = document.getElementById('list')

const toForm = () => {
  location.pathname = '/form.html'
}

const getUserId = () => {
  const cookies = document.cookie
  const cookiesArray = cookies.split(';')
  for (let i = 0; i < cookiesArray; i++) {
    const array = i.split('=')
    if (array[0] == 'userId') {
      return array[1]
    }
  }
}

const fetchEsTitle = async () => {
  const userId = getUserId()
  const res = await fetch('')
  const json = await res.json()
  for (let i = 0; i < json.length; i++) {
    const es = document.createElement('li')
    es.addEventListener('click', () => {
      location.pathname = '/detail.html'
    })
    es.textContent = json[i].title
    list.appendChild(es)
  }
}

fetchEsTitle()
