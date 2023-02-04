import styled from "styled-components";



export const CardPayment = styled.div<{selected: boolean}>`
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
    border: 1px solid ${props => props.selected ? '#8047F8': '#f3f2f2'};
    cursor: pointer;

    span{
        font-size: 12px;
    }

}
`