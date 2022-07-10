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
  for (let i = 0; i < cookiesArray.length; i++) {
    const array = i.split('=')
    if (array[0] == 'userId') {
      return array[1]
    }
  }
}

// sessionStorageに'length'が存在する場合、detailページから遷移したためdataをfetchして表示
const displayData = async () => {
  const sessionLength = sessionStorage.getItem('length')
  if (sessionLength) {
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
        ttl.value = largeData[i].type
        const smallData = largeData[i].smallData
        for (let j = 0; j < smallData.length; j++) {
          if (smallData[j].length === sessionLength) {
            len.value = smallData[j].length
            sec.checked = !smallData[j].secret
            tx.value = smallData[j].text
          }
        }
      }
    }
    sessionStorage.removeItem('title')
    sessionStorage.removeItem('length')
  }
}

displayData()

const createEs = async () => {
  // dataをfetch
  const userId = getUserId()
  const res = await fetch(`http://localhost:8000/memo?userId=${userId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await res.json()
  // largeDataに既にtypeが存在するか確認
  const largeData = json.largeData
  let isTypeExist = false
  for (let i = 0; i < largeData.length; i++) {
    if (largeData[i].type === ttl.value) {
      isTypeExist = true
    }
  }
  // typeが存在する場合、smallDataのlengthをチェックして追加or書き換え
  if (isTypeExist) {
    for (let k = 0; k < largeData.length; k++) {
      if (largeData[k].type === ttl.value) {
        const smallData = largeData[k].smallData
        for (let j = 0; j < smallData.length; j++) {
          if (smallData[j].length === len.value) {
            smallData.splice(j, 1)
          }
        }
        smallData.push({
          length: len.value,
          secret: !sec.checked,
          text: tx.value,
        })
      }
    }
  } else {
    // typeが存在しない場合、largeDataに新規で追加
    largeData.push({
      type: ttl.value,
      smallData: [
        {
          length: len.value,
          secret: !sec.checked,
          text: tx.value,
        },
      ],
    })
  }
  // 更新したデータをpatchで送信
  await fetch(`http://localhost:8000/memo?userId=${useId}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  })
  location.pathname = '/my-page.html'
}

btn.onclick = createEs
