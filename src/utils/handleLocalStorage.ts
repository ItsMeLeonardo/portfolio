export const saveStorage = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

export const getStorageItem = (key: string): any => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}
