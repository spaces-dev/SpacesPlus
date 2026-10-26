import type { Feature } from '../core/feature'

function inSeason() {
  const now = new Date()
  const month = now.getMonth()
  const day = now.getDate()
  return month === 11 || (month === 0 && day <= 15)
}

export const newYear: Feature = {
  id: 'new-year',
  core: true,
  start: (ctx) => {
    if (!inSeason()) return

    let timer = 0
    const stop = ctx.onDom(() => {
      if (timer) return
      const logo = document.querySelector<HTMLElement>('.ico_logo_newyear')
      if (!logo) return

      let key = 1
      timer = window.setInterval(() => {
        const next = key > 5 ? 1 : key + 1
        logo.classList.replace(`ico_logo_newyear_${key}`, `ico_logo_newyear_${next}`)
        key += 1
        if (key > 6) key = 1
      }, 10000)
    })

    return () => {
      stop()
      if (timer) window.clearInterval(timer)
    }
  },
}
