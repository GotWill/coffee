import * as C from './styles'
import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Product } from '../../types/Product'
import { ProductContext } from '../../contexts/ProductContext'

type Props = {
    item: Product;
}



export function CartCoffee({item}: Props) {

    const {products, updateProductList} = useContext(ProductContext)
    console.log(products.length)

    const [count, setCount] = useState(1)
    // const [listProducts, setListProducts] = useState<Product[]>([])


    function countSub() {
        if (count > 1) {
            setCount((state) => state - 1)
        }
    }

    function countAddCart(){

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

        setCount((state) => state + 1)
    }
    return (
        <C.ListCoffe>
                    <div className='coffee' key={item.id}>
                        <div className='img'>
                            <img src={item.imgPath} />
                        </div>
                        <div className='textBg'>
                            {item.slug1 &&
                                <div>
                                    {item.slug1}
                                </div>
                            }

                            {item.slug1 && item.slug2 &&
                                <>
                                    <div>
                                        {item.slug1}
                                    </div>
                                    <div>
                                        {item.slug2}
                                    </div>
                                </>

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
                                R$ <span className='value'>{item.value}</span>
                            </div>
                            <div className='footer-d-flex'>
                                <div className='count'>
                                    <button onClick={countSub}>-</button>
                                    <h4>{count}</h4>
                                    <button onClick={countAddCart}>+</button>
                                </div>
                                <div className='circleCart'>
                                    <Link to="/checkout">
                                        <ShoppingCart size={24} color="#F3F2F2" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
        </C.ListCoffe>
    )
}