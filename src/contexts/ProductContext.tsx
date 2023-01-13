import { createContext, ReactNode, useContext, useReducer, useState } from "react";

type State = {
   id: number;
   imgPath: string;
   slug1: string;
   slug2?: string;
   slug3?: string;
   title: string;
   description: string;
   value: number;

}

interface ProductContextType {
    products: State[];
    updateProductList: (product: any) => void;
}

export const ProductContext = createContext({} as ProductContextType)

type ChildrenTypeProps = {
    children: ReactNode
}

export function ProductContextProvider({children}:ChildrenTypeProps){

    const [products, setProducts] = useState([])

    function updateProductList(product: []){
        setProducts(product)
    }

    return (
      <ProductContext.Provider value={{products,updateProductList}}>
         {children}
      </ProductContext.Provider>
    )
}