// section 
import Header from "./sections/Header"
import Page from "./sections/Page"
import Nav from "./sections/Nav"
import Products from "./sections/Products"
import Footer from "./sections/Footer"


// components
import FooterCards from "./components/FooterCards"
import Hr from "./components/Hr"
import Layout from "./components/Layout_g_3_1"

// data import
import { newProduct_data, featuredProduct_data } from "./data/Product_data"

// App Component
function App() {
  return(
    <>
    <Header />
    <Page>
       <Nav items={["Home", "About", "Shop", "Profile"]} />
      <Hr my="my-2" />
      <Layout />

      <Products heading="New Product" cards={newProduct_data()} />
      <Products heading="Featured Product" cards={featuredProduct_data()}/>
      
    </Page>
    <Page>
      <FooterCards/>
      <Footer />
    </Page>
    </>
  )
}

export default App;
