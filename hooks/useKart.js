import { useState } from "react";

const useKart = (initialState = [])=> {
    const [kart, setKart] = useState(initialState)
    const addItem = (id)=> {
        const index = kart.indexOf(id);
        if(index === -1){
            setKart([...kart, id]);
        }
    };
    const removeItem = (id) => {
        const newKart = [...kart];
        const index = kart.indexOf(id)
        newKart.splice(index, 1)
        setKart(newKart)
    }
    return [kart, setKart, addItem, removeItem]
}

export default useKart;