import { MapPinLine, Trash, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import * as C from './styles'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import { FormActions, useForm } from '../../contexts/UserFormContext'
import { ChangeEvent, useContext, useState } from 'react'
import { SelectOptions } from '../../components/SelectOptions'
import { Count } from '../../components/Count'


export function Checkout() {

    const { dispatch, state } = useForm();
    const [count, setCount] = useState(0);

    const { products, updateProductList, coffeesAddCheck, addCoffeeTotal } = useContext(ProductContext)

    
    const valueCoffeesCheck = coffeesAddCheck.reduce((acc, item) => acc + item.value, 0)
    const valueProducts = products.reduce((acc, item) => acc + item.value, 0)
    const totalPrice = valueProducts + 3.50 + valueCoffeesCheck
    const priceFormated = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

   


    function changeValue(value: number) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setCep,
            payload: e.target.value
        })
    }

    function handleRuaChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setRua,
            payload: e.target.value
        })
    }
    function handleNumeroChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setNumero,
            payload: e.target.value
        })
    }
    function handleComplementoChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setComplemento,
            payload: e.target.value
        })
    }
    function handleBairroChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setBairro,
            payload: e.target.value
        })
    }
    function handleCidadeChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setCidade,
            payload: e.target.value
        })
    }
    function handleUfChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setUf,
            payload: e.target.value
        })
    }

    function setLevel(setButtonSeleted: number) {
        dispatch({
            type: FormActions.setButtonSeleted,
            payload: setButtonSeleted
        })
    }

   



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
                        <C.Input width='200px' placeholder='CEP' onChange={handleCepChange} value={state.cep} />
                        <C.Input width='100%' placeholder='Rua' onChange={handleRuaChange} value={state.rua} />
                        <div className='input-group'>
                            <C.Input width='200px' placeholder='Número' onChange={handleNumeroChange} value={state.numero} />
                            <C.Input width='100%' placeholder='Complemento' onChange={handleComplementoChange} value={state.complemento} />
                        </div>
                        <div className='input-group'>
                            <C.Input width='200px' placeholder='Bairro' onChange={handleBairroChange} value={state.bairro} />
                            <C.Input width='252px' placeholder='Cidade' onChange={handleCidadeChange} value={state.cidade} />
                            <C.Input width='60px' placeholder='UF' onChange={handleUfChange} value={state.uf} />
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



                    <div style={{ display: 'flex' }}>
                        <SelectOptions
                            title='CARTÃO DE CRÉDITO'
                            selected={state.buttonSeleted === 0}
                            onClickBorder={() => setLevel(0)}
                            icon={<CreditCard size={24}  color="#8047F8"/>}

                        />
                        <SelectOptions
                            title=' CARTÃO DE DÉBITO'
                            onClickBorder={() => setLevel(1)}
                            selected={state.buttonSeleted === 1}
                            icon={<Bank size={24}  color="#8047F8"/>}
                        />
                        <SelectOptions
                            title=' DINHEIRO'
                            onClickBorder={() => setLevel(2)}
                            selected={state.buttonSeleted === 2}
                            icon={<Money size={24} color="#8047F8"/>}
                        />
                    </div>

                </C.PaymentInfos>
            </div>
            <div>
                <h1>Cafés selecionados</h1>
                <C.BoxRight>

                    {products.map((item) => {
                        return (
                            <Count item={item} key={item.id}/>

                        )
                    })}


                    {products.length > 0 ? (
                        <C.ReseumeProduct>
                            <div>
                                <span>Total de itens</span>
                                <span>{priceFormated}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>{changeValue(3.50)}</span>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <span>{priceFormated}</span>
                            </div>

                            <div className='btn'>
                                <Link to="/sucess">
                                    <button disabled={!state.cep}>CONFIRMAR PEDIDO</button>
                                </Link>

                            </div>
                        </C.ReseumeProduct>
                    ) : (
                        <div>
                            <C.ReseumeProduct>
                                <div>
                                    <span>Total de itens</span>
                                    <span>R$ 0</span>
                                </div>
                                <div>
                                    <span>Entrega</span>
                                    <span>R$ 0</span>
                                </div>
                                <div>
                                    <h2>Total</h2>
                                    <span>R$ 0</span>
                                </div>

                                <div className='btn'>
                                    <Link to="/sucess">
                                        <button disabled={products.length === 0}>CONFIRMAR PEDIDO</button>
                                    </Link>

                                </div>
                            </C.ReseumeProduct>
                        </div>
                    )
                    }


                </C.BoxRight>
            </div>
        </C.Container>
    )
}