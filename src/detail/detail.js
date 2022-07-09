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
