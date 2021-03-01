const setLocalStorage = (itemName, data) => {
  try {
    localStorage.setItem(itemName, JSON.stringify(data))
  } catch (error) {
    console.log(`src/Service/LocalStorage/ -> setLocalStorage func ${error}`)
  }
}
const getLocalStorageItem = (itemName) => {
  try {
    return JSON.parse(localStorage.getItem(itemName))
  } catch (error) {
    console.log(`src/Service/LocalStorage/ -> getLocalStorageItem func ${error}`)
  }
}

const localStorageInitialState = (itemName, data) => {
  try {
    if (getLocalStorageItem(itemName) === null) {
      let b = data || []
      setLocalStorage(itemName, b)
      return getLocalStorageItem(itemName)
    } else {
      return getLocalStorageItem(itemName) || []
    }
  } catch (error) {
    console.log(`check src/service/localStorage -> localStorageInitialState func ${error}`)
  }
}

const localStorageSetState = (itemName, data) => {
  try {
    if (getLocalStorageItem(itemName) === null) {
      let b = []
      setLocalStorage(itemName, b)
    } else {
      let a = []
      a = getLocalStorageItem(itemName)
      a.push(data)
      setLocalStorage(itemName, a)
    }
  } catch {
    console.error('check src/service/localStorage.js -> localStorageSetState func')
  }
}

export { localStorageInitialState, localStorageSetState, setLocalStorage, getLocalStorageItem }
