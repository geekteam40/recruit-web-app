const ttl = document.getElementById('title')
const len = document.getElementById('length')
const sec = document.getElementById('secret')
const tx = document.getElementById('text')
const btn = document.getElementById('button')

sec.addEventListener('click', () => {
  const secLabel = document.getElementById('secret-label')
  secLabel.textContent = sec.checked ? '公開' : '非公開'
})

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

const createEs = async () => {
  const values = {
    type: ttl.value,
    length: len.value,
    secret: !sec.checked,
    text: tx.value,
  }
  console.log(values)
  const userId = getUserId()
  await fetch('', {
    method: 'POST',
    headers: {
      accept: 'applecation/json',
      'Content-Type': 'applecation/json',
      // Authorization: userId,
    },
    body: JSON.stringify(values),
  })
  location.pathname = '/my-page.html'
}

btn.onclick = createEs
