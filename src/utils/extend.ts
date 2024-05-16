/**
 * Используется для комбинирования значений двух объектов
 * @param obj1
 * @param obj2
 */
export const extend = (obj1: any, obj2: any) => {
  for (let i in obj2) {
    if (obj2.hasOwnProperty(i)) {
      obj1[i] = obj2[i]
    }
  }
  return obj1
}
