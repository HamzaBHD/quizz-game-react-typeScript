export const shuffle = (array: string[]): string[] => {
  let newArray: string[] = array
  for (let i = 0; i < array?.length; i++) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }

  return newArray
}
