import useLocalStorage from "use-local-storage";


const useKart = (initialState = [])=> {
    const [kart, setKart] = useLocalStorage('kart',initialState);
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
    return [kart, addItem, removeItem]
}

export default useKart;