/**
 * * Add a new item to an object
 * * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param obj The original object
 * @param key The key for the item to add
 * @param value The value for the new key to add
 * @param index The position in the object to add the new key/value pair [optional]
 * @return {Object} An immutable clone of the original object, with the new key/value pair added
 */
export const modifyObject = (
  obj: object[],
  key: string[keyof object],
  value: any,
  index?: number
): Object => {
  // Create a temp object and index variable
  let temp: any = {}
  let i = 0

  // Loop through the original object
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // If the indexes match, add the new item
      if (i === index && key && value) {
        temp[key] = value
      }

      // Add the current item in the loop to the temp obj
      temp[prop] = obj[prop]

      // Increase the count
      i++
    }
  }

  // If no index, add to the end
  if (!index && key && value) {
    temp[key] = value
  }

  return temp
}
