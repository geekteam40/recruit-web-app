const list = document.getElementById('list')
const select = document.getElementById('search-select')
const form = document.getElementById('search-form')
const button = document.getElementById('search-button')

let count = 0

// 全ての公開データを表示
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
    es.classList.add('list-container')
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
    count += 1
  }
}

fetchData()

// 検索
const searchButton = async () => {
  for (i = 0; i < count; i++) {
    const listContainer = document.querySelector('.list-container')
    listContainer.remove()
  }
  count = 0
  const type = select.value
  const searchKeyWord = form.value
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
    es.classList.add('list-container')
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
    count += 1
  }
}

button.onclick = searchButton

// newのとき、入力フォームを表示
const showForm = () => {
  if (select.value === 'new') {
    select.style.display = 'none'
    form.style.display = 'inline'
  }
}

select.onchange = showForm
