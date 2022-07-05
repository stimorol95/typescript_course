import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const userName = 'Wade Warren'
const avatarSrc = 'img/avatar.png'
const favoriteItemsAmount = 0

const checkInDate = new Date()
checkInDate.setDate(checkInDate.getDate() + 1)

const checkOutDate = new Date()
checkOutDate.setDate(checkInDate.getDate() + 2)

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(userName, avatarSrc, favoriteItemsAmount)
  renderSearchFormBlock(checkInDate, checkOutDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
