var set = require('lodash.set')
var reduce = require('lodash.reduce')
var clone = require('lodash.clone')

module.exports = function expandTopLevelDotPaths (object, initialValue) {
  var isClone = false

  if (!initialValue) {
    initialValue = clone(object)
    isClone = true
  }

  if (typeof object !== 'object') {
    throw new Error('expecting object')
  } else if (typeof initialValue !== 'object') {
    throw new Error('expecting initialValue to be object')
  }

  return reduce(object, function (expanded, value, key) {
    if (key.indexOf('.') > -1) {
      if (isClone) {
        delete expanded[key]
      }
      set(expanded, key, value)
    }
    return expanded
  }, initialValue)
}
