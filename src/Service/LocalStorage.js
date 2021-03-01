export const saveState = (data) => {
  try {
    const serializedState = JSON.stringify(data)
    localStorage.setItem('state', serializedState)

    if (localStorage.getItem('articlesSession') === null) {
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

// import { useCallback, useState } from 'react'

// function useLocalStorageNonString(key, initialState) {
//   const serializedInitialState = JSON.stringify(initialState)
//   let storageValue = initialState
//   try {
//     storageValue = JSON.parse(localStorage.getItem(key)) ?? initialState
//   } catch {
//     localStorage.setItem(key, serializedInitialState)
//   }
//   const [value, setValue] = useState(storageValue)
//   const updatedSetValue = useCallback(
//     (newValue) => {
//       const serializedNewValue = JSON.stringify(newValue)
//       if (serializedNewValue === serializedInitialState || typeof newValue === 'undefined') {
//         localStorage.removeItem(key)
//       } else {
//         localStorage.setItem(key, serializedNewValue)
//       }
//       setValue(newValue ?? initialState)
//     },
//     [initialState, serializedInitialState, key]
//   )
//   return [value, updatedSetValue]
// }

// export default useLocalStorageNonString
