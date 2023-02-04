import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import * as C from './styles'
import img from '../../assets/Illustration.png'
import { useForm } from '../../contexts/UserFormContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Sucess() {
    const { state } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (state.cep === "" || state.rua === "" || state.complemento === "" || state.uf === "") {
            navigate("/")
        }
    })
    return (
        <C.Container>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <C.CardInfos>
                    <div className='d-flex'>
                        <C.CircleIcon bg='#8047F8'>
                            <MapPin size={15} color="white" />
                        </C.CircleIcon>
                        <div>
                            Entrega em <strong>{state.rua}, {state.numero}</strong><br>
                            </br> {state.bairro} - {state.cidade}, {state.uf}
                        </div>
                    </div>

                    <div className='d-flex'>
                        <C.CircleIcon bg="#DBAC2C">
                            <Timer size={15} color="#FFF" />


                        </C.CircleIcon>
                        <div>
                            <span> Previsão de entrega</span> <br></br>
                            <strong> 20 min - 30 min</strong>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <C.CircleIcon bg='#C47F17'>
                            <CurrencyDollar size={15} color="#FFF" />
                        </C.CircleIcon>
                        <div>
                            <span>Pagamento na entrega</span><br></br>
                            {state.buttonSeleted === 0 &&
                                <strong>Cartão de Crédito</strong>
                            }

                            {state.buttonSeleted === 1 &&
                                <strong>Cartão de Débito</strong>
                            }

                            {state.buttonSeleted === 2 &&
                                <strong>Dinheiro</strong>
                            }

                        </div>
                    </div>
                </C.CardInfos>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </C.Container>
    )
}