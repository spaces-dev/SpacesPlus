/**
 * Используется для поиска в DOM
 * Пример поиска бонусных монет:
 * * let coins: any = find(document.links, { href: 'https://spaces.ru/services/gift_get/?Link_id=' })
 * @param obj 
 * @param obj2 
 */
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