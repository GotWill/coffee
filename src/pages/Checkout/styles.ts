import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
margin-top: 50px;
margin-bottom: 50px;

@media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
}

`

export const BoxLeft = styled.div`
margin-top: 25px;
width: 640px;
height: 372px;
padding: 40px;
gap: 32px;
background: #F3F2F2;
border-radius: 6px;

.header-flex{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .hedaer-title{
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;
    }
}
`

export const AreaForm = styled.div`
margin-top: 2.2rem;
width: 100%;
display: flex;
gap: 16px;
flex-direction: column;

.input-group{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 767px){
        flex-direction: column;
    }
}
`

type PropsWithInput = {
    width: string;
}

export const Input = styled.input<PropsWithInput>`
height: 42px;
width: ${(props) => props.width};


/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;
padding: 12px;
outline: none;


`

export const BoxRight = styled.div`
margin-top: 25px;
width: 448px;

background: #F3F2F2;
border-radius: 6px 44px;
padding:28px 40px;
gap: 24px;
`



export const ProductList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid #E6E5E5;
    padding: 20px 0;
   
    /* & + & {
        margin: 30px 0;
      
    }
    */

    h3{
        line-height: 2.4rem;
    }

    img{
        height: 64px;
        width: 64px;

    }

    .details-products{
        display: flex;
        align-items: center;
        gap: 1.6rem;

        .count{
          width: 72px;
          height: 32px;
          background: #E6E5E5;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          padding: 8px;


          button{
            outline: none;
            border: none;
            color: #8047F8;
            background-color: transparent;
            font-size: 1.5rem;
          }

          

        }

        .removeIcon button{
            width: 100%;
            height: 32px;
            background: #E6E5E5;
            border-radius: 6px;
            padding: 0px 8px;
            gap: 4px;
            border: none;
            cursor: pointer;
            display: flex;
            font-size: 12px;
            align-items: center;
            
          }
    }
`

export const LineBorder = styled.div`
    border-bottom: 1px solid #E6E5E5;
    width: 368px;
    padding: 20px;
`
export const ReseumeProduct = styled.div`
    margin-top: 1rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
       line-height: 2rem;
    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        button{
            padding: 12px 8px;
            gap: 4px;
            width: 368px;
            height: 46px;
            background: #DBAC2C;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            color: #FFFFFF;
            font-weight: bold;
 }
 button:disabled {
    cursor: not-allowed;
    opacity: 0.6
 }
    }
`

export const PaymentInfos = styled.div`

padding: 40px;
gap: 32px;
width: 640px;
height: 207px;
background: #F3F2F2;
border-radius: 6px;
margin-top: 0.8rem;

.payment-dflex{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4{
        color: #574F4D;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5rem;
    }
    p{
        font-weight: 400;
        font-size: 14px;
        color: #574F4D;
    }
}
`

export const CardPayment = styled.div`
width: 100%;
margin-top: 1.9rem;
display: flex;
align-items: center;
justify-content: space-between;


div{
    display: flex;
    align-items: center;
    padding: 16px;
gap: 12px;
background: #E6E5E5;
border-radius: 6px;
}
`
