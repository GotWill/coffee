import { MapPinLine, Trash, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import * as C from './styles'
import coffee from '../../assets/coffee/coffee-1.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

export function Checkout() {
    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <C.Container>
            <div>
                <h1>Complete seu pedido</h1>
                <C.BoxLeft>
                    <div className='header-flex'>
                        <div>
                            <MapPinLine size={22} color="#C47F17" />
                        </div>
                        <div className='hedaer-title'>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <C.AreaForm>
                        <C.Input width='200px' placeholder='CEP' />
                        <C.Input width='100%' placeholder='Rua' />
                        <div className='input-group'>
                            <C.Input width='200px' placeholder='Número' />
                            <C.Input width='100%' placeholder='Complemento' />
                        </div>
                        <div className='input-group'>
                            <C.Input width='200px' placeholder='Bairro' />
                            <C.Input width='252px' placeholder='Cidade' />
                            <C.Input width='60px' placeholder='UF' />
                        </div>
                    </C.AreaForm>

                </C.BoxLeft>
                <C.PaymentInfos>
                    <div className='payment-dflex'>
                        <CurrencyDollar size={22} color="#8047F8" />
                        <div>
                            <h4>Pagamento</h4>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <C.CardPayment>
                        <div>
                            <CreditCard size={14} color="#8047F8" />
                            CARTÃO DE CRÉDITO
                        </div>
                        <div>
                            <Bank size={14} color="#8047F8" />
                            CARTÃO DE DÉBITO
                        </div>
                        <div>
                            <Money size={14} color="#8047F8" />
                            DINHEIRO
                        </div>
                    </C.CardPayment>
                </C.PaymentInfos>


            </div>
            <div>
                <h1>Cafés selecionados</h1>
                <C.BoxRight>

                    {products.map((item) => {
                        return (
                            <>
                                <C.ProductList>

                                    <div>
                                        <img src={item.imgPath} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className='details-products'>
                                            <div className='count'>
                                                <button>-</button>
                                                <span>1</span>
                                                <button>+</button>
                                            </div>

                                            <div className='removeIcon'>
                                                <button>
                                                    <Trash size={16} color="#8047F8" />
                                                    <span>REMOVER</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span>R$ {item.value}</span>
                                    </div>
                                </C.ProductList>
                            </>

                        )
                    })}


                    {/* <C.LineBorder /> */}
                    {/* <C.ProductList margin='30px'>
                        <div>
                            <img src={coffee} alt="" />
                        </div>
                        <div>
                            <div>
                                <h3>Expresso Tradicional</h3>
                            </div>
                            <div className='details-products'>
                                <div className='count'>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>

                                <div className='removeIcon'>
                                    <button>
                                        <Trash size={16} color="#8047F8" />
                                        <span>REMOVER</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>R$ 9,90</span>
                        </div>
                    </C.ProductList>
                    <C.LineBorder /> */}

                    {products.length > 0 &&

                        <C.ReseumeProduct>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <span>R$ 33,20</span>
                            </div>

                            <div className='btn'>
                                <Link to="/sucess">
                                    <button>CONFIRMAR PEDIDO</button>
                                </Link>

                            </div>
                        </C.ReseumeProduct>

                    }


                </C.BoxRight>
            </div>
        </C.Container>
    )
}