import emailJs from 'emailjs-com'

import { authEmail } from './authEmail'

const user_api_key = 'user_LlNxIZ9kh0mrF8XzhtFiJ'

emailJs.init(user_api_key)

export type Contact = {
  name: string
  email: string
  message: string
}

const validateFields = (contact: Contact) => {
  const { name, email, message } = contact
  return !(!name || !email || !message)
}

export const sendMessage = async (templateParams: Contact) => {
  const serviceID = 'service_4nqmzwj'
  const templateID = 'template_gccsea7'

  if (!validateFields(templateParams)) {
    return Promise.reject('Invalid fields')
  }

  const isValid = await authEmail(templateParams.email)

  if (!isValid.valid) {
    return Promise.reject('Wrong email')
  }
  return emailJs.send(serviceID, templateID, templateParams)
}
