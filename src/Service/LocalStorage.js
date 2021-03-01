const setLocalStorage = (itemName, data) => {
  try {
    localStorage.setItem(itemName, JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}
const getLocalStorageItem = (itemName) => {
  try {
    return JSON.parse(localStorage.getItem(itemName)) || []
  } catch (error) {
    console.log(error)
  }
}

const localStorageInitialState = (itemName, data) => {
  try {
    if (localStorage.getItem(itemName) === null) {
      let b = data || []
      localStorage.setItem(itemName, JSON.stringify(b))
      return JSON.parse(localStorage.getItem(itemName))
    } else {
      return JSON.parse(localStorage.getItem(itemName)) || []
    }
  } catch (error) {
    console.log(`check src/service/localStorage -> localStorageInitialState func ${error}`)
  }
}

const localStorageSetState = (arrayName, data) => {
  try {
    if (localStorage.getItem(arrayName) === null) {
      let b = []
      localStorage.setItem(arrayName, JSON.stringify(b))
    } else {
      let a = []
      a = JSON.parse(localStorage.getItem(arrayName))
      a.push(data)
      localStorage.setItem(arrayName, JSON.stringify(a))
    }
  } catch {
    console.error('check src/service/localStorage.js -> localStorageSetState func')
  }
}

export { localStorageInitialState, localStorageSetState, setLocalStorage, getLocalStorageItem }
