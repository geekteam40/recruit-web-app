const password = document.getElementById("password");
const adress = document.getElementById("address");
const button = document.getElementById("submit");

const createID = async () => {
    const values = {
        psw: password.values,
        ad: adress.values,
    }
    console.log(values);
    const res = await fetch(' ', {
        method: 'POST',
        headers: {
            accept: 'applecation/json',
            'Content-Type': 'applecation/json',
        },
        body: JSON.stringify(values)
    })
    const json = await res.json()
    document.cookie = `userID=${json.userId}`
    location.pathname = `/login.html`
}