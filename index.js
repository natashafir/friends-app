const URL = 'https://randomuser.me/api/?results=100';
const CARDS = document.querySelector('.cards');

// let allUsers;
let friends = [];

function initialApp() {
    fetch(URL)
        .then(response => response.json())
        // .then(data => {allUsers = data.results;
        .then((json) => {
            allUsers(json.results);
        });
    // CARDS.appendChild(img);
    // return allUsers.map(users => console.log(users.picture.large));

    // console.log(users);
    // } );
}

function allUsers (array) {
    friends = array.map(user => {
        return {
            name: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            phone: user.cell,
            email: user.email,
            gender: user.gender,
            photo: user.picture.large

        }


    });
    renderUsers();
    // console.log(friends);
}

function createCardItem (item) {

    const img = document.createElement('img');
    CARDS.appendChild(img);
    console.log(CARDS);
    img.src = item.photo;
}

function renderUsers() {
    friends.forEach(elem => {
        console.log(elem);
        // CARDS.appendChild(createCardItem(elem));
        createCardItem(elem)
    });
}




// console.log(allUsers);
// console.log(users);
document.addEventListener('DOMContentLoaded', initialApp);
