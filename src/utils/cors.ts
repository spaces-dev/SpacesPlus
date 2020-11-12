import { ICors } from '../interfaces/Cors'

/**
 * Fucking CORS!
 * @param params 
 * @param callback 
 */
export const cors = (params: ICors, callback: Function) => {
    const x = new XMLHttpRequest()

    x.open(params.method, `https://cors-anywhere.herokuapp.com/${params.url}`)

    x.onload = x.onerror = () => callback(JSON.parse(x.responseText))

    switch (params.method) {
        case 'GET':
            //x.setRequestHeader('X-Proxy', 'spaces')
            break
        case 'POST':
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            break
    }

    x.send(params.data)
}