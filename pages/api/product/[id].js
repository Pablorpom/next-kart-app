import data from '../../../data/products.json'

export default function productIdHandler(req, res){
    const {id} = req.query
    res.end(
        JSON.stringify(
            data.products.find((product)=>{
                return id === product.id
            })
        ) 
    ) 
}