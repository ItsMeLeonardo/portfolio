import emailJs from 'emailjs-com'

import { authEmail } from './authEmail'

/* @ts-ignore */
const user_api_key: string = import.meta.env.VITE_USER_API_KEY
/* @ts-ignore */
const serviceID: string = import.meta.env.VITE_EMAIL_SERVICE_ID
/* @ts-ignore */
const templateID: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID

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
  if (!validateFields(templateParams)) {
    return Promise.reject('Invalid fields')
  }

  const isValid = await authEmail(templateParams.email)

  if (!isValid.valid) {
    return Promise.reject('Wrong email')
  }
  return emailJs.send(serviceID, templateID, templateParams)
}
