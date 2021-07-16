// select span
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())

// select button and links
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed')
  }
})

// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    //
    let position
    if (navbar.classList.contains('fixed')) {
      position = element.offsetTop - 62
    } else {
      position = element.offsetTop - 124
    }

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: 'smooth',
    })
  })
})
