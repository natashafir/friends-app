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

// function createCardItem (item) {
//
//     const img = document.createElement('img');
//     CARDS.appendChild(img);
//     img.classList.add('card-wrapper');
//     console.log(CARDS);
//     img.src = item.photo;
// }


function createCardItem (item) {
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
    console.log(CARDS);
    console.log(item.name);
    img.src = item.photo;
}

function renderUsers() {
    friends.forEach(elem => {
        // console.log(elem);
        // CARDS.appendChild(createCardItem(elem));
        createCardItem(elem)
    });
}




// console.log(allUsers);
// console.log(users);
document.addEventListener('DOMContentLoaded', initialApp);
