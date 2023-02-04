import styled from "styled-components";

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