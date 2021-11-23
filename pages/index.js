import styles from '../styles/Home.module.css'

import ProductsGrid from '../components/ProductsGrid'
import data from '../data/products.json'
import useKart from '../hooks/useKart';
import Kart from '../components/Kart';
import mapByProperty from '../utils/mapByProperty';
import { useEffect } from 'react';


export default function Home(props) {
  const [kart, setKart, addItem, removeItem] = useKart();
  const productsById = mapByProperty(props.data, 'id');
  const kartItems = kart.map((id)=> productsById[id]);

  useEffect(()=>{
    const localStorageKart = localStorage.getItem('kart')
    if(localStorageKart){
      setKart(JSON.parse(localStorageKart))
    } else {
      setKart([])
    }
  },[setKart])

  useEffect(()=>{
    localStorage.setItem('kart', JSON.stringify(kart) )
  },[kart])

  return (
    <div className={styles.container}>
      <ProductsGrid data={props.data} onAddItem={addItem}/>
      <Kart items={kartItems} onRemoveItem={removeItem}/>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: data.products 
    }
  }
}
