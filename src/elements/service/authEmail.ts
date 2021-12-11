const BASE_URL = 'https://mailcheck.p.rapidapi.com'

const HEADERS = {
  'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
  'x-rapidapi-key': '7028af46dcmsh56246c485fca18cp1be055jsnb15ace0594c7',
}

export const authEmail = async  (email: string) => {
  const response = await fetch(`${BASE_URL}/?domain=${email}`, {
    method: 'GET',
    headers: HEADERS,
  })

  return await response.json()
}
