import { Router } from '../Router'
import { GlobalStyle } from './styles/global'
import { ProductContextProvider } from './contexts/ProductContext'

function App() {

  return (
    <>
    <ProductContextProvider>
      <Router />
    </ProductContextProvider>
       
      <GlobalStyle />

    </>

  )

}

export default App
