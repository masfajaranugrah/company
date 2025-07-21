import Cookies from 'js-cookie'

// Set cookie
export const setCookie = (key: string, value: string, expireDays = 7) => {
    Cookies.set(key, value, { expires: expireDays })
}

// Get cookie
export const getCookie = (key: string) => {
    return Cookies.get(key)
}

// Delete cookie
export const removeCookie = (key: string) => {
    Cookies.remove(key)
}
