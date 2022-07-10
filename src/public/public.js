const list = document.getElementById('list')

const fetchData = async () => {
  const type = ''
  const searchKeyWord = ''
  const res = await fetch(
    `http://localhost:8000/search?type=${type}&keyword=${searchKeyWord}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const json = await res.json()
  for (let i = 0; i < json.length; i++) {
    const es = document.createElement('li')
    const esTitle = document.createElement('div')
    esTitle.classList.add('list-title')
    esTitle.textContent = json[i].title
    es.appendChild(esTitle)
    const esContent = document.createElement('div')
    esContent.classList.add('list-content')
    esContent.textContent = json[i].text
    es.appendChild(esContent)
    const esLength = document.createElement('div')
    esLength.classList.add('list-length')
    esLength.textContent = json[i].length
    es.appendChild(esLength)
    list.appendChild(es)
  }
}

fetchData()
