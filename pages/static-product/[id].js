import data from '../../data/products.json'

export default function StaticProduct(props){
    return(
        <div>{props.dataProduct.name}</div>
    )
}

export async function getStaticPaths(){
    const paths = data.products.map((product)=>({
        params: {id: product.id }
    }))
    console.log('paths:', paths);
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const dataProduct = data.products.find((product)=>{
        return params.id === product.id
    })
    console.log('data:', data);
    return {
        props: {dataProduct}
    }
}