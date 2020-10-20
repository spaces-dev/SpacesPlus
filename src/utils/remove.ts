export const remove = (e: any) => {
    if (e !== null) {
        e.parentNode.removeChild(e)
    }
}