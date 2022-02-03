const BASE_URL = 'https://mailcheck.p.rapidapi.com'

/* @ts-ignore */
const authEmailApiKey: string = import.meta.env.VITE_AUTH_EMAIL_API_KEY

const HEADERS = {
  'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
  'x-rapidapi-key': authEmailApiKey,
}

export const authEmail = async (email: string) => {
  const response = await fetch(`${BASE_URL}/?domain=${email}`, {
    method: 'GET',
    headers: HEADERS,
  })

  return await response.json()
}
