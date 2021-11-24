export default function Product(props){
    return(
        <div>{props.data.name}</div>
    )
}

export async function getServerSideProps(context){
    console.log(context.params.id);
    const res = await fetch(`http://localhost:3000/api/product/${context.params.id}`)
    const data = await res.json()
    return {
        props: {data}
    }
}
