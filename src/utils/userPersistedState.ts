import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type usePersistedStateResponse<T> = [
    state: T,
    setState: Dispatch<SetStateAction<T>>
]


const usePersistedState = <T>(key: string, initialState: any):usePersistedStateResponse<T> => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if(storageValue){
            return JSON.parse(storageValue)
        } else{
            return initialState
        }
    }); 

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}

export default usePersistedState;