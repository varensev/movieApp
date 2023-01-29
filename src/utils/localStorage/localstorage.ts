const keyLocalStorage = {
    favorites: "favorites",
    watchLater: "watchLater"
}

function getStorage(key: string) {
    try {
        const value: string | null = localStorage.getItem(key)
        return JSON.parse(value)
    } catch (error) {
        console.error(error)
    }

}


function setStorage(key: string, value: number) {
    try {
        const ARRAY = new Set(getStorage(key));
        ARRAY.add(value);

        const stringValue = JSON.stringify([...ARRAY])
        localStorage.setItem(key, stringValue)
    } catch (error) {
        console.error(error)
    }
}

export {setStorage, getStorage, keyLocalStorage}
