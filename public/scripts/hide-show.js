/* ===== open and close navbar  ===== */
const navbar = document.querySelector('.Navbar')
const btnClose = document.querySelector('.icon-close')
const btnOpen = document.querySelector('.icon-open')
const navbarRight = document.querySelector('.Navbar-right')

btnOpen.addEventListener('click', () => {
  navbar.classList.add('open-mobile')
  btnClose.classList.remove('hidden')
  setTimeout(() => navbarRight.classList.add('isActive'), 300)
  btnOpen.classList.add('hidden')
})

btnClose.addEventListener('click', () => {
  navbar.classList.remove('open-mobile')
  navbarRight.classList.remove('isActive')
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

// Nav link active with scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 130

    let sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.Navbar-item a[href*=${sectionId}]`)
        .classList.add('isActive')
    } else {
      document
        .querySelector(`.Navbar-item a[href*=${sectionId}]`)
        .classList.remove('isActive')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/* ====== scroll up ===== */
const scrollUp = (event) => {
  const btnUp = document.querySelector('.scroll-up')
  if (event.currentTarget.scrollY >= 500) {
    btnUp.classList.add('isActive')
  } else {
    btnUp.classList.remove('isActive')
  }
}
window.addEventListener('scroll', scrollUp)
