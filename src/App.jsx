import Header from "./sections/Header"
import Page from "./sections/Page"
import Nav from "./sections/Nav"

function App() {
  return(
    <>
    <Header />
    <Page>
       <Nav items={["Home", "About", "Shop", "Profile"]} />
    </Page>
    </>
  )
}

export default App
