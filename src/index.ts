import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { SearchFormData } from './searchFormData.js'

const checkInDate = new Date()
checkInDate.setDate(checkInDate.getDate() + 1)

const checkOutDate = new Date()
checkOutDate.setDate(checkInDate.getDate() + 2)

class userclass {
  userName: string
  avatarSrc: string
  constructor (userName: string, avatarSrc: string) {
    this.userName = userName,
    this.avatarSrc = avatarSrc
  }
}

const user = new userclass('WadeWarren', 'img/avatar.png')

localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('favoritesAmount', '2')

function getUserData (key: string) {
  const userInfo: unknown = JSON.parse(localStorage.getItem(key))
  if (typeof userInfo === 'object') { 
    return userInfo as userclass
  } else {
    console.log('error userInfo')
  }
}

function getFavoritesAmount (key: string) {
  const userInfo: unknown = JSON.parse(localStorage.getItem(key))
  if (typeof userInfo === 'number') {
    return userInfo
  } else {
    console.log('error amount')
  }
}

const userName = getUserData('user').userName
const avatarSrc = getUserData('user').avatarSrc
const favoriteItemsAmount = getFavoritesAmount('favoritesAmount')

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(userName, avatarSrc, favoriteItemsAmount)
  renderSearchFormBlock(checkInDate, checkOutDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const btn = document.getElementById('search-btn')
  btn.addEventListener('click', clickHandler)

  function clickHandler (e) {
    e.preventDefault()
    const data: SearchFormData = {
      city: (document.getElementById('city') as HTMLInputElement).value,
      checkInDate: (document.getElementById('check-in-date') as HTMLInputElement).value,
      checkOutDate: (document.getElementById('check-out-date') as HTMLInputElement).value,
      maxPrice: (document.getElementById('max-price') as HTMLInputElement).value
    }
    search(data)
  }
  
  function search (data: SearchFormData) {
    console.log(data)
  }
})