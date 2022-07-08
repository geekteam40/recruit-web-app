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

// // json形式データ
// [
//   {
//     id: fi2ojru0923rw39,
//     title: '学生時代に力を入れたこと',
//     contents: [
//       {
//         limit: 300,
//         body: '私が学生時代に力を入れたことは〜。',
//       },
//       {
//         limit: 400,
//         body: '私が学生時代に力を入れたことは〜。',
//       },
//     ],
//   },
//   {
//     //　contentsが１つの場合
//     id: woijr2r203oiw,
//     title: '就活軸',
//     contents: [
//       {
//         limit: 200,
//         body: '私の就活軸は〜。',
//       },
//     ],
//   }
// ]
