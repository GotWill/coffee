import * as C from './styles'
import LogoImg from '../../assets/logo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'

export function Header() {
    const { products } = useContext(ProductContext)
    return (
        <C.ContainerHeader>
            <div>
                <Link to='/'>
                    <img src={LogoImg} />
                </Link>

            </div>
            <div className='d-flex'>
                <div className='stateBg'>
                    <MapPin size={22} />
                    Porto Alegre, RS
                </div>
                <div className='carrinho'>
                    <Link to="/checkout">
                        <ShoppingCart size={22} color="#C47F17" weight='bold' />
                    </Link>
                    {products.length > 0 &&
                        <div className='absolute'>
                            {products.length}
                        </div>

                    }


                </div>
            </div>
        </C.ContainerHeader>
    )
}