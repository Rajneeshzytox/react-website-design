// section 
import Header from "./sections/Header"
import Page from "./sections/Page"
import Nav from "./sections/Nav"

// components
import Hr from "./components/Hr"

function App() {
  return(
    <>
    <Header />
    <Page>
       <Nav items={["Home", "About", "Shop", "Profile"]} />
      <Hr />
    </Page>
    </>
  )
}

export default App
