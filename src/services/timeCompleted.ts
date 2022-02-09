const LOCAL_STORAGE_KEY = 'lastVisited'

const lastDaySaved = (): number => {
  try {
    const lastDay = localStorage.getItem(LOCAL_STORAGE_KEY)
    return lastDay ? JSON.parse(lastDay) : 0
  } catch (e) {
    console.log({ e })
    return 0
  }
}

export const rangeDaysCompleted = (dayRange: number): boolean => {
  const dayInSeconds = 86400
  const rangeInSeconds = dayRange * dayInSeconds
  const now: number = Date.now()
  const typeElapsed: number = Math.abs(now - lastDaySaved()) / 1000

  if (typeElapsed > rangeInSeconds) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(now))
    return true
  }

  return false
}
