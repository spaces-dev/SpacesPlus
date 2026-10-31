export function classes(...names: Array<string | false | null | undefined>) {
  return names.filter((name): name is string => Boolean(name)).join(' ')
}

export function byId<T extends HTMLElement = HTMLElement>(id: string) {
  return document.getElementById(id) as T | null
}
