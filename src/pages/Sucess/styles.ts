import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 104px;

    h1{
        font-weight: 800;
        font-size: 32px;
        color: #C47F17;
    }

    @media (max-width: 768px) {
      flex-direction: column;

      .img img {
        width: 100%;
      }
    }
`

export const CardInfos = styled.div`
margin-top: 30px;
padding: 40px;
gap: 32px;
width: 526px;
height: 270px;

@media (max-width: 767px){
  width: 300px !important;

}

 border-radius: 6px 36px;
border: 1px solid red;

  .d-flex{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px 0;

  }
         
`

type PropsBackground = {
    bg: string;
}

export const CircleIcon = styled.div<PropsBackground>`
background: ${(props) => props.bg};
  border-radius: 1000px;
  padding: 8px;
  gap: 8px ; 
  width: 32px;
  height: 32px;

`