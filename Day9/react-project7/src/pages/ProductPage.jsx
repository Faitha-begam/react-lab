const ProductPage = ({products}) => {
  return (
   <>
   {products.map((e,i)=>(
    
    <div  key={i+1}>
        <p><strong>Product {i+1}</strong></p>
    <p>Product Name : {e.productName}</p>
    <p>Product Price : {e.price}</p>
    <p>StockStatus : {e.stockStatus}</p> <br />
    </div>
    
   ))}
   </>

  )
}
export default ProductPage
