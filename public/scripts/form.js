// import emailjs from 'emailjs-com'

const form = document.querySelector('#contact-form')
const textArea = document.querySelector('#contact-form textarea')

emailjs.init('user_LlNxIZ9kh0mrF8XzhtFiJ')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)

  const name = formData.get('name').trim()
  const email = formData.get('email').trim()
  const message = formData.get('message').trim()
  const templateParams = {
    name,
    email,
    message,
  }

  const serviceID = 'service_4nqmzwj'
  const templateID = 'template_gccsea7'

  emailjs
    .send(serviceID, templateID, templateParams)
    .then(console.log)
    .catch((error) => console.error(error))
})
