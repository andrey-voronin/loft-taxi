export const loadState = () => {
    const savedState = localStorage.getItem("loft-taxi-state")
    if(savedState !== null) {
        try {
            return JSON.parse(savedState)
        } catch(err) {
            return null
        }
    } else{
        return null
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem("loft-taxi-state", JSON.stringify(state))
    } catch(err) {

    }
    
}