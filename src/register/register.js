const password = document.getElementById('password')
const address = document.getElementById('address')
const button = document.getElementById('submit')

const createId = async () => {
  // const values = {
  //   psw: password.value,
  //   ad: address.value,
  // }
  // const res = await fetch('', {
  //   method: 'POST',
  //   headers: {
  //     accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(values),
  // })
  // const json = await res.json()
  // document.cookie = `userId=${json.userId}`
  document.cookie = 'userId=8h4osk'
  location.pathname = `/my-page.html`
}
