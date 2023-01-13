import styled from "styled-components";

export const Container = styled.div`
    margin-top: 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .infosTitle{

        margin-bottom: 3rem;

        h1{
        font-weight: 800;
        font-size: 48px;
        line-height: 130%;
        margin-bottom: 1rem;
    }
    
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    }

    }

   
;
`


export const InfoContent = styled.div`
display: flex;
align-items: center;
justify-content: space-around ;
gap: 1.9rem;

.d-flex{
   display: flex;
   align-items: center;
   gap: 1rem;
   margin: 10px 0;

   div{
    display: flex;
    align-items: center;
   }
}

.coffe-mt{
    margin-right: 12px;
}

.bgOrange{
    background: #C47F17;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;

}
.box{
    background: #574F4D;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;

}
.timer{
    background: #DBAC2C;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;

}
.coffe{
    background: #8047F8;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;

}
`

export const ContainerCoffee = styled.div`
    margin-top: 50px;
 
h1{
    color: #403937;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
}
`
export const ListCoffe = styled.div`
margin-top: 40px;

display: flex;
flex-wrap: wrap;
gap: 2rem;
margin-bottom: 50px;
`

