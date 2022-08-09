const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
    .then(res => res.json())
    .then(data => renderApi.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}

function getUser() {
    fetch(`${url}/1`)
    .then(res => res.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

const newUser = { 
    name: "Anna",
    city: "Londrina",
    avatar: "http://pixelsum.com/400/200"
}

const updatedUser = {
    name: "Tallos",
    city: "Guarujá",
    avatar: "http://pixelsum.com/400/200"
}

deleteUser(10)
getUsers()
getUser()
addUser()
updateUser(updatedUser, 9)