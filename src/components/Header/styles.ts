import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

.d-flex{
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stateBg{
    background-color: #EBE5F9;
    color: #4B2995;
    padding: 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.3em;
}
.carrinho{
    background: #F1E9C9;
border-radius: 6px;
padding: 8px;
display: flex;
align-items: center;

.absolute{
    position: absolute;
    margin-top: -30px;
    margin-left: 20px;
    background: #C47F17;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

}

`