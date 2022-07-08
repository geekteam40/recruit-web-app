const list = document.getElementById('list')

const fetchEsTitle = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  for (let i = 0; i < json.length; i++) {
    const es = document.createElement('li')
    es.addEventListener('click', () => {
      sessionStorage.setItem('id', json[i].id)
      location.pathname = '/test.html'
    })
    es.textContent = json[i].title
    list.appendChild(es)
  }
}

fetchEsTitle()
