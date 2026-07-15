import ProductPage from "../pages/ProductPage"

const Products = () => {
    
  return (
    <>
    <div className="bg-green-200 w-80 h-120 p-13 m-auto mt-30 rounded-lg">
     <ProductPage products = {[
  {
    productName: "Wireless Mouse",
    price: 799,
    stockStatus: "In Stock"
  },
  {
    productName: "Mechanical Keyboard",
    price: 2499,
    stockStatus: "Out of Stock"
  },
  {
    productName: "USB-C Hub",
    price: 1299,
    stockStatus: "Limited Stock"
  }]}/>
  </div>
    </>
  )
}

export default Products
