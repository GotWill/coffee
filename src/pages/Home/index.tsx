import * as C from './styles'
import ImgCoffee from '../../assets/coffee.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useState } from 'react'
import { CartCoffee } from '../../components/CartCoffee'
import { item } from '../../data/Item'

export function Home() {

    const [list, setList] = useState(item)

    return (
        <>
            <C.Container>
                <div>
                    <div className='infosTitle'>
                        <h1> Encontre o café perfeito <br></br> para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br></br> qualquer hora</p>
                    </div>


                    <C.InfoContent>
                        <div className='d-flex'>
                            <div className='bgOrange'>
                                <ShoppingCart size={16} color="#FFF" weight='bold' />
                            </div>
                            <p>Compra simples e segura</p>
                        </div>

                        <div className='d-flex'>
                            <div className='box'>
                                <Package size={16} color="#FFF" />
                            </div>
                            <p>Embalagem mantém o café intacto</p>
                        </div>

                    </C.InfoContent>

                    <C.InfoContent>
                        <div className='d-flex'>
                            <div className='timer'>
                                <Timer size={16} color="#FFF" />
                            </div>
                            <p>Entrega rápida e rastreada</p>
                        </div>

                        <div className='d-flex coffe-mt'>
                            <div className='coffe'>
                                <Coffee size={16} color="#FFF" />
                            </div>
                            <p>O café chega fresquinho até você</p>
                        </div>

                    </C.InfoContent>
                </div>
                <div className='imgCoffe'>
                    <img src={ImgCoffee} />
                </div>
            </C.Container>

            <C.ContainerCoffee>
                <h1>Nossos cafés</h1>
                <C.ListCoffe>
                    {list.map((item, key) => {
                        return  <CartCoffee item={item} key={key} /> 
                    })}
                </C.ListCoffe>

            </C.ContainerCoffee>
        </>

    )
}