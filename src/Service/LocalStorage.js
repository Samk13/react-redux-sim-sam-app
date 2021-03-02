const setItem = (itemName, data) => {
  try {
    localStorage.setItem(itemName, JSON.stringify(data))
  } catch (error) {
    console.log(`src/Service/LocalStorage/ -> setLocalStorage func ${error}`)
  }
}
const getItem = (itemName) => {
  try {
    return JSON.parse(localStorage.getItem(itemName))
  } catch (error) {
    console.log(`src/Service/LocalStorage/ -> getLocalStorageItem func ${error}`)
  }
}

const setInitialState = (itemName, data) => {
  try {
    if (getItem(itemName) === null) {
      let b = data || []
      setItem(itemName, b)
      return getItem(itemName)
    } else {
      return getItem(itemName) || []
    }
  } catch (error) {
    console.log(`check src/service/localStorage -> localStorageInitialState func ${error}`)
  }
}

const SetState = (itemName, data) => {
  try {
    if (getItem(itemName) === null) {
      let b = []
      setItem(itemName, b)
    } else {
      let a = []
      a = getItem(itemName)
      a.push(data)
      setItem(itemName, a)
    }
  } catch {
    console.error('check src/service/localStorage.js -> localStorageSetState func')
  }
}

export { setInitialState, SetState, setItem, getItem }
