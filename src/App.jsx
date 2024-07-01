// section 
import Header from "./sections/Header"
import Page from "./sections/Page"
import Nav from "./sections/Nav"
import Products from "./sections/Products"

// components
import Hr from "./components/Hr"
import Layout from "./components/Layout_g_3_1"

function App() {
  return(
    <>
    <Header />
    <Page>
       <Nav items={["Home", "About", "Shop", "Profile"]} />
      <Hr my="my-2" />

      <Layout />

      <Products />
      <Products />
      
    </Page>
    </>
  )
}

export default App
