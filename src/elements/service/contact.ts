import emailjs from 'emailjs-com'

const user_api_key = 'user_LlNxIZ9kh0mrF8XzhtFiJ'

emailjs.init(user_api_key)

export type Contact = {
  name: string
  email: string
  message: string
}

// TODO: Add validation

export const sendMessage = (templateParams: Contact) => {
  const serviceID = 'service_4nqmzwj'
  const templateID = 'template_gccsea7'

  emailjs
    .send(serviceID, templateID, templateParams)
    .then(console.log)
    .catch((error) => console.error(error))
}
