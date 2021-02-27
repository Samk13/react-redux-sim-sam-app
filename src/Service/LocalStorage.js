export const saveState = (data) => {
  try {
    const serializedState = JSON.stringify(data)
    localStorage.setItem('state', serializedState)

    if (localStorage.getItem === null) {
      let b = []
      // b.push(JSON.parse(localStorage.getItem('articlesSession')))
      localStorage.setItem('articlesSession', JSON.stringify(b))
    } else {
      let a = []
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem('articlesSession')) || []
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(data)
      // Alert the array value
      // console.log('💻' + a) // Should be something like [Object array]
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('articlesSession', JSON.stringify(a))
    }
  } catch {
    console.error('check localStorage file line 4')
  }
}
