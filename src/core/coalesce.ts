export function coalesce(run: () => void) {
  let running = false
  let queued = false

  return () => {
    if (running) {
      queued = true
      return
    }

    running = true
    try {
      do {
        queued = false
        run()
      } while (queued)
    } finally {
      running = false
    }
  }
}
