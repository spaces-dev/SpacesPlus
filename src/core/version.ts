export const packVersion = (version: string) => Number(version.split('.').join(''))

export function unpackVersion(value: number | string) {
  if (typeof value !== 'number') return value
  return String(value).split('').join('.')
}
