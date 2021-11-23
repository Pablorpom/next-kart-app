import {useEffect} from 'react'

const useLocalStorage = (state, setState, key)=>{
    useEffect(()=>{
        const localStorageKart = localStorage.getItem(key)
        if(localStorageKart){
          setState(JSON.parse(localStorageKart))
        } else {
          setState([])
        }
      },[setState, key])
    
      useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state) )
      },[state, key])
}

export default useLocalStorage;

