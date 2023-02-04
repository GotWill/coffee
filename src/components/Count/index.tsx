import { Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { ProductContext } from "../../contexts/ProductContext"
import { Product } from "../../types/Product"
import * as C from './styles'

type CoffeeProps = {
    item: Product
}



export function Count({item}: CoffeeProps) {
    const { products, updateProductList, coffeesAddCheck, addCoffeeTotal } = useContext(ProductContext)
    const [count, setCount] = useState(1);

    function handleRemoveCoffeeList(){
        if(coffeesAddCheck.length > 0){
         const newListRemoveCoffee = [...coffeesAddCheck]
         newListRemoveCoffee.pop()
         addCoffeeTotal(newListRemoveCoffee)
         if(count > 0){
            setCount((state) => state -1)
         }
        }
     }

     function addCoffeeList(value: number, id: number) {
        const newList = [...coffeesAddCheck]
        newList.push({
            value: value,
            id: id
        })
        addCoffeeTotal(newList)
        setCount((state) => state + 1)
    }

    function removeProduct(id: number) {
        const newList = products.filter((item) => item.id !== id)
       const newListCoffeeIsCheck = coffeesAddCheck.filter((item) => item.id !== id)
       addCoffeeTotal(newListCoffeeIsCheck)
        updateProductList(newList)
      
    }

    function changeValue(value: number) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
    return (
        <C.ProductList key={item.id}>

            <div>
                <img src={item.imgPath} alt={item.title} />
            </div>
            <div>
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div className='details-products'>
                    <div className='count'>
                        <button onClick={handleRemoveCoffeeList}>-</button>
                        <span>{count}</span>
                        <button onClick={() => {
                            addCoffeeList(item.value, item.id)
                        }}>+</button>
                    </div>

                    <div className='removeIcon'>
                        <button onClick={() => {
                            removeProduct(item.id);
                        }}>
                            <Trash size={16} color="#8047F8" />
                            <span>REMOVER</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <span>{changeValue(item.value)}</span>
            </div>
        </C.ProductList>
    )
}