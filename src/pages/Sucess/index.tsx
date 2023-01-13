import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import * as C from './styles'
import img from '../../assets/Illustration.png'

export function Sucess() {
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
                            Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre, RS
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
                           <strong>Cartão de Crédito</strong>
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