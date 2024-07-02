// section 
import Header from "./sections/Header"
import Page from "./sections/Page"
import Nav from "./sections/Nav"
import Products from "./sections/Products"
import Footer from "./sections/Footer"


// components
import Hr from "./components/Hr"
import Layout from "./components/Layout_g_3_1"

// data to send in Products and ProductCard

const newProduct = [
  {
      id: "1",
      src: "product1.png",
      disc: "1st ipsum dolor sit amet consectetur",
      prePrice: "$67.99",
      newPrice: "$56.99",
  },

  {
      id: "2",
      src: "product1.png",
      disc: "3rd ipsum dolor sit amet consectetu",
      prePrice: "$47.99",
      newPrice: "$28.99",
  },

]
const featuredProduct = [
  {
      id: "1",
      src: "product1.png",
      disc: "1st ipsum dolor sit amet consectetur",
      prePrice: "$67.99",
      newPrice: "$56.99",
  },
  {
      id: "2",
      src: "product1.png",
      disc: "2nd ipsum dolor sit amet consectetur",
      prePrice: "$47.99",
      newPrice: "$28.99",
  },
  {
      id: "3",
      src: "product1.png",
      disc: "3rd ipsum dolor sit amet consectetur",
      prePrice: "$67.99",
      newPrice: "$56.99",
  },
  {
      id: "4",
      src: "product1.png",
      disc: "4th ipsum dolor sit amet consectetur",
      prePrice: "$47.99",
      newPrice: "$28.99",
  },
]



// App Component
function App() {
  return(
    <>
    <Header />
    <Page>
       <Nav items={["Home", "About", "Shop", "Profile"]} />
      <Hr my="my-2" />
      <Layout />

      <Products heading="New Product" cards={newProduct} />
      <Products heading="Featured Product" cards={featuredProduct}/>
      
    </Page>
    <Page>
      <Footer />
    </Page>
    </>
  )
}

export default App;
