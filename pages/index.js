import styles from '../styles/Home.module.css'

import ProductsGrid from '../components/ProductsGrid'
import data from '../data/products.json'
import useKart from '../hooks/useKart';


export default function Home(props) {
  const [kart, addItem, removeItem] = useKart();
  return (
    <div className={styles.container}>
      <ProductsGrid data={props.data} onAddItem={addItem}/>
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
