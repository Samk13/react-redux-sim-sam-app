const localStorageSetState = (data, arrayName) => {
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

export { localStorageSetState }
