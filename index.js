const URL = 'https://randomuser.me/api/?results=100';
const CARDS = document.querySelector('.cards');

// let allUsers;
let friends = [];

function initialApp() {
    fetch(URL)
        .then(response => response.json())
        // .then(data => {allUsers = data.results;
        .then((json) => {
            userTemplate(json.results);
        });
    // CARDS.appendChild(img);
    // return allUsers.map(users => console.log(users.picture.large));

    // console.log(users);
    // } );
}

function userTemplate (array) {
    friends = array.map(user => {
        return {
            name: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            gender: user.gender,
            photo: user.picture.large
        }
    });
    renderUsers();
}

// function createCardItem (item) {
//
//     const img = document.createElement('img');
//     CARDS.appendChild(img);
//     img.classList.add('card-wrapper');
//     console.log(CARDS);
//     img.src = item.photo;
// }

function createCardItem (item) {
    // console.log(item);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    CARDS.appendChild(cardWrapper);
    const img = document.createElement('img');
    cardWrapper.appendChild(img);
    img.classList.add('img-card');
    const name = document.createElement('p');
    cardWrapper.appendChild(name);
    const userName = document.createTextNode(item.name);
    name.appendChild(userName);
    const age = document.createElement('p');
    cardWrapper.appendChild(age);
    const userAge = document.createTextNode(item.age);
    name.appendChild(userAge);
    const gender = document.createElement('p');
    cardWrapper.appendChild(gender);
    const userGender = document.createTextNode(item.gender);
    name.appendChild(userGender);
    img.src = item.photo;

}
function renderUsers() {
    friends.forEach(elem => {
        // console.log(elem);
        // CARDS.appendChild(createCardItem(elem));
        createCardItem(elem);
        // friends.push(elem);

    });
    console.log(friends)
}

// function filtrByGender() {
//
// }

// console.log(allUsers);
// console.log(users);
document.addEventListener('DOMContentLoaded', initialApp);
