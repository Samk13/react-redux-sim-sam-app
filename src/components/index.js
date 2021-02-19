// Auto import all components from component folder resulting in cleaner way to import in the consumer component
const requireContext = require.context('./', false, /.*\.(js|jsx)$/)

let components = {}

requireContext.keys().forEach((fileName) => {
  if (fileName === './index.js') return

  let name = fileName.replace(/(\.\/|\.jsx|\.js)/g, '')

  components[name] = requireContext(fileName).default
})

module.exports = components
