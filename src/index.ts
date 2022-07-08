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
  let user: unknown = JSON.parse(localStorage.getItem("user"));

  interface User {
    userName: string;
    userAvatar: string;
  }

  return user as User;
}

function getFavoritesAmount() {
  let favorite: unknown = localStorage.getItem("favoritesAmount");
  return favorite as Number;
}

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(
    getUserData().userName,
    getUserData().userAvatar,
    getFavoritesAmount()
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  searchHandler();
  getTodosByCount(3);
   renderToast(
       {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
       {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
   )
});

