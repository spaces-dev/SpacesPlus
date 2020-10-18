// TODO: interface
export const find = (obj: any, obj2: any) => {
    let list = []

    for (let i = 0; i < obj.length; i++) {
        for (let j in obj2) {
            if (obj[i][j].indexOf(obj2[j]) >= 0) {
                list.push(obj[i])
            }
        }
    }

    return list[0] ? list : null
}