import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { searchHandler } from "./search-form-data.js";
import { getTodosByCount } from "./api.js";
localStorage.setItem("user", "");
localStorage.setItem("favoritesAmount", "6");
localStorage.user = JSON.stringify({
    userName: "Girl",
    userAvatar: "/img/avatar.png",
});
function getUserData() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
}
function getFavoritesAmount() {
    let favorite = localStorage.getItem("favoritesAmount");
    return favorite;
}
window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock(getUserData().userName, getUserData().userAvatar, getFavoritesAmount());
    renderSearchFormBlock();
    renderSearchStubBlock();
    searchHandler();
    getTodosByCount(3);
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
