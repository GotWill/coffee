import styled from "styled-components";

export const ListCoffe = styled.div`
margin-top: 40px;

display: flex;
flex-wrap: wrap;
gap: 2rem;


.coffee{
    width: 256px;
    height: 310px;
    background: #F3F2F2;
    border-radius: 6px 36px;
}

.img{
    display: flex;
    justify-content: center;

    img{
        margin-top: -20px;
    }
}

.textBg{
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 8px;
   gap: 0.3rem;

    div{
        width: 81px;
    margin: 20px auto;
    text-align: center;
    background: #F1E9C9;
    border-radius: 100px;
    padding: 4px 8px;
    color: #C47F17;
    font-weight: 700;
    font-size: 10px;
    }



}

.info{

    padding: 0 10px;
    
    
    h2{
        color: #403937;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.6;
        text-align: center;
    }

    p{
        font-size: 14px;
        text-align: center;
        color: #8D8686;
        line-height: 1.6;
        margin-top: 0.5em;

    }
}

.footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    .btn-card{
        border: none;
        outline: none;
        cursor: pointer;

    }
    .btn-card:disabled{
        cursor: not-allowed;
        opacity: 0.7;
    }
    .value{
        font-weight: 800;
        font-size: 24px;
        color: #574F4D;
    }
.footer-d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
}

.circleCart{
    background: #4B2995;
    border-radius: 6px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        border: none !important;
    }
}
}

.count{
    background: #E6E5E5;
    border-radius: 6px;
    width: 72px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

   button{
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 20px; 
    background: transparent;
   }
}

`
