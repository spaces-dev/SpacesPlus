import type { Feature } from '@/core/feature'

const december = 11
const january = 0
const seasonEndsOn = 15
const frameCount = 6
const frameMs = 10_000
const logoClass = 'ico_logo_newyear'

function inSeason() {
  const now = new Date()
  const month = now.getMonth()
  const day = now.getDate()
  return month === december || (month === january && day <= seasonEndsOn)
}

export const newYear: Feature = {
  id: 'new-year',
  core: true,
  start: (ctx) => {
    if (!inSeason()) return

    let timer = 0
    const stop = ctx.onDom(() => {
      if (timer) return
      const logo = document.querySelector<HTMLElement>(`.${logoClass}`)
      if (!logo) return

      let key = 1
      timer = window.setInterval(() => {
        const next = key >= frameCount ? 1 : key + 1
        logo.classList.replace(`${logoClass}_${key}`, `${logoClass}_${next}`)
        key += 1
        if (key > frameCount) key = 1
      }, frameMs)
    })

    return () => {
      stop()
      if (timer) window.clearInterval(timer)
    }
  },
}
