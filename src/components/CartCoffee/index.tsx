import * as C from './styles'
import { useContext, useState, useEffect } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Product } from '../../types/Product'
import { ProductContext } from '../../contexts/ProductContext'
import { formatValue } from '../../helpers'

type Props = {
    item: Product;
}



export function CartCoffee({ item }: Props) {

   


    const { products, updateProductList } = useContext(ProductContext)

    const [count, setCount] = useState(0)

    useEffect(() => {
        const stateJSON = JSON.stringify(count)
        const saveCountStorage = localStorage.setItem('@count-coffee-ignite', stateJSON)
    }, [count])

    function countAddCart() {

        const newList = [...products]

        newList.push({
            id: item.id,
            imgPath: item.imgPath,
            description: item.description,
            slug1: item.slug1,
            slug2: item.slug2,
            slug3: item.slug2,
            title: item.title,
            value: item.value
        })
        updateProductList(newList)

        alert("Produto adicionado a lista")




    }

    function removeItem(id: number) {


        if (count > 0) {
            const newProductsFiltered = products.filter((item) => item.id !== id)
            updateProductList(newProductsFiltered)
            setCount((state) => state - 1)
        }
    }
    return (
        <C.ListCoffe>
            <div className='coffee'>
                <div className='img'>
                    <img src={item.imgPath} />
                </div>
                <div className='textBg'>
                    {
                        item.slug1 && (
                            <div>
                                {item.slug1}
                            </div>
                        )
                    }
                    {
                        item.slug2 && (
                            <div>
                                {item.slug2}
                            </div>
                        )
                    }
                    {
                        item.slug3 && (
                            <div>
                                {item.slug3}
                            </div>
                        )
                    }
                </div>

                <div className='info'>
                    <h2>{item.title}</h2>
                    <p>
                        {item.description}
                    </p>
                </div>

                <div className='footer'>
                    <div>
                        <span className='value'>{formatValue(item.value)}</span>
                    </div>
                    <div className='footer-d-flex'>
                        <div className='count'>
                            <button onClick={() => {
                                removeItem(item.id);
                            }}>-</button>
                            <h4>{count}</h4>
                            <button onClick={() => setCount((state) => state + 1)}>+</button>
                        </div>
                        <button disabled={!count} className='btn-card' onClick={countAddCart}>
                            <div className='circleCart'>
                                <ShoppingCart size={24} color="#F3F2F2" />
                            </div>
                        </button>
                       
                    </div>
                </div>
            </div>
        </C.ListCoffe>
    )
}