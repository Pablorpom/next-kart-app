import styles from '../styles/Home.module.css'

import ProductsGrid from '../components/ProductsGrid'
import useKart from '../hooks/useKart';
import Kart from '../components/Kart';
import mapByProperty from '../utils/mapByProperty';
import useLocalStorage from '../hooks/useLocalStorage';


export default function Home(props) {
  const [kart, setKart, addItem, removeItem] = useKart();
  const productsById = mapByProperty(props.data, 'id');
  const kartItems = kart.map((id)=> productsById[id]);

  useLocalStorage(kart, setKart, 'kart');

  return (
    <div className={styles.container}>
      <ProductsGrid data={props.data} onAddItem={addItem}/>
      <Kart items={kartItems} onRemoveItem={removeItem}/>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/product`)
   const data = await res.json()
  return {
    props: {
      data: data.products 
    }
  }
}
