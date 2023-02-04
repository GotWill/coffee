import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";

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

type listCoffeeCheck = {
    value: number;
    id: number
}

interface ProductContextType {
    products: State[];
    coffeesAddCheck:  listCoffeeCheck[];
    updateProductList: (product: State[]) => void;
    addCoffeeTotal: (product: listCoffeeCheck[]) => void;

}

export const ProductContext = createContext({} as ProductContextType)

type ChildrenTypeProps = {
    children: ReactNode
}

export function ProductContextProvider({children}:ChildrenTypeProps){

    const [products, setProducts] = useState<State[]>(() => {
        const getItems = localStorage.getItem("@ignite-coffee:coffee-state");
        if(getItems){
         return JSON.parse(getItems)
        }
    })
    const [coffeesAddCheck, setCoffeesAddCheck] = useState<listCoffeeCheck[]>([])

    useEffect(() => {
        const stateJSON = JSON.stringify(products)
        localStorage.setItem('@ignite-coffee:coffee-state', stateJSON)
    }, [products])

    function updateProductList(product: State[]){
        setProducts(product)

    }

    function addCoffeeTotal(product: listCoffeeCheck[]){
        setCoffeesAddCheck(product)
    }
   
  
    return (
      <ProductContext.Provider value={{products,updateProductList, coffeesAddCheck, addCoffeeTotal}}>
         {children}
      </ProductContext.Provider>
    )
}