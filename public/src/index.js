import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
const checkInDate = new Date();
checkInDate.setDate(checkInDate.getDate() + 1);
const checkOutDate = new Date();
checkOutDate.setDate(checkInDate.getDate() + 2);
class userclass {
    constructor(userName, avatarSrc) {
        this.userName = userName,
            this.avatarSrc = avatarSrc;
    }
}
const user = new userclass('WadeWarren', 'img/avatar.png');
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('favoritesAmount', '2');
function getUserData(key) {
    const userInfo = JSON.parse(localStorage.getItem(key));
    if (typeof userInfo === 'object') {
        return userInfo;
    }
    else {
        console.log('error userInfo');
    }
}
function getFavoritesAmount(key) {
    const userInfo = JSON.parse(localStorage.getItem(key));
    if (typeof userInfo === 'number') {
        return userInfo;
    }
    else {
        console.log('error amount');
    }
}
const userName = getUserData('user').userName;
const avatarSrc = getUserData('user').avatarSrc;
const favoriteItemsAmount = getFavoritesAmount('favoritesAmount');
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock(userName, avatarSrc, favoriteItemsAmount);
    renderSearchFormBlock(checkInDate, checkOutDate);
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
    const btn = document.getElementById('search-btn');
    btn.addEventListener('click', clickHandler);
    function clickHandler(e) {
        e.preventDefault();
        const data = {
            city: document.getElementById('city').value,
            checkInDate: document.getElementById('check-in-date').value,
            checkOutDate: document.getElementById('check-out-date').value,
            maxPrice: document.getElementById('max-price').value
        };
        search(data);
    }
    function search(data) {
        console.log(data);
    }
});
