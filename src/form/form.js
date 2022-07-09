const ttl = document.getElementById('title')
const len = document.getElementById('length')
const sec = document.getElementById('secret')
const tx = document.getElementById('text')
const btn = document.getElementById('button')

sec.addEventListener('click', () => {
  const secLabel = document.getElementById('secret-label')
  secLabel.textContent = sec.checked ? '公開' : '非公開'
})

const createEs = async () => {
  const values = {
    title: ttl.value,
    length: len.value,
    secret: !sec.checked,
    text: tx.value,
  }
  await fetch('', {
    method: 'POST',
    headers: {
      accept: 'applecation/json',
      'Content-Type': 'applecation/json',
    },
    body: JSON.stringify(values),
  })
  location.pathname = '/my-page.html'
}

btn.onclick = createEs
