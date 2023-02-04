import { Router } from '../Router'
import { GlobalStyle } from './styles/global'
import { ProductContextProvider } from './contexts/ProductContext'
import { FormProvider } from './contexts/UserFormContext'


function App() {

  return (
    <>
      <ProductContextProvider>
        <FormProvider>
          <Router />
        </FormProvider>

      </ProductContextProvider>

      <GlobalStyle />

    </>

  )

}

export default App
