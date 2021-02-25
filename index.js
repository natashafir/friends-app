const URL = 'https://randomuser.me/api/?results=100';
const CARDS = document.querySelector('.cards');
let filterBy = 'all';
let allFriends;
let friends = [];
let sortedFriends;

function initialApp() {
    fetch(URL)
        .then(response => response.json())
        .then((data) => (allFriends = data.results))
        .then(() => userTemplate(allFriends))
}

function userTemplate(array) {
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

function createCardItem(item) {
    const cardWrapper = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const userName = document.createTextNode(item.name);
    const age = document.createElement('p');
    const userAge = document.createTextNode(item.age);
    const gender = document.createElement('p');
    const userGender = document.createTextNode(item.gender);

    cardWrapper.classList.add('card-wrapper');
    img.classList.add('img-card');

    CARDS.appendChild(cardWrapper);
    cardWrapper.appendChild(img);
    cardWrapper.appendChild(name);
    name.appendChild(userName);
    cardWrapper.appendChild(age);
    name.appendChild(userAge);
    cardWrapper.appendChild(gender);
    name.appendChild(userGender);

    img.src = item.photo;
}

document.querySelector(".gender").addEventListener("click", filterByGender);


function filterByGender({target}) {
    getSortedFriends(target.value);
}


function getSortedFriends(choosedGender) {
    console.log(choosedGender);
    if (choosedGender === 'all') {
        return friends;
        console.log(friends);
    } else {
        console.log(friends.filter(element => element.gender === choosedGender)) ;
        return friends.filter(element => element.gender === choosedGender);
    }
}


function renderUsers() {
    friends.forEach(elem => {
        createCardItem(elem);
});
}

document.addEventListener('DOMContentLoaded', initialApp);
