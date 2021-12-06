// open and close navbar

const navbar = document.querySelector('.Navbar')
const btnClose = document.querySelector('.icon-close')
const btnOpen = document.querySelector('.icon-open')
const navbarRight = document.querySelector('.Navbar-right')

btnOpen.addEventListener('click', () => {
  navbar.classList.add('open-mobile')
  btnClose.classList.remove('hidden')
  setTimeout(() => navbarRight.classList.remove('hidden'), 300)
  btnOpen.classList.add('hidden')
})

btnClose.addEventListener('click', () => {
  navbar.classList.remove('open-mobile')
  navbarRight.classList.add('hidden')
  btnOpen.classList.remove('hidden')
  btnClose.classList.add('hidden')
})

// active navbar items

const items = document.querySelectorAll('.Navbar-item')

items.forEach((item) => {
  item.addEventListener('click', () => {
    items.forEach((item) => item.firstElementChild.classList.remove('isActive'))
    item.firstElementChild.classList.add('isActive')
  })
})
