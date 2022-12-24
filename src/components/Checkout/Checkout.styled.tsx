import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom:  0;
`;



export const ProductsWrapper = styled.div`
  display: block;
  width: fit-content;
 
`;


export const Total = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  
  overflow: hidden;
  position: relative;
  margin-top: 10px;
`;

export const Labels = styled.div`
  display: block;
`;

export const TotalAmountLabel = styled.p`
  display: flexbox;
  font-weight: bolder;
  font-style: normal;
  font-size: 20px;
  margin: 0;
  color: #000;
  margin-bottom: 10px;
  margin-left: 200px;
`;

export const TotalItemsLabel = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: #000;
  margin: 0;
  margin-left: 202px;
`;


export const PriceContainer = styled.div`
  display: block;
  align-items: flex-end;
  gap: 10px;
  width: 120px;
  
`;

export const TotalAmount = styled.p`
  text-align: end;
  font-weight: bolder;
  font-style: normal;
  font-size: 20px;
  margin: 0;
  color: #000;
  margin-top: 0;
  margin-bottom: 10px;
  margin-right: 0;
`;

export const TotalItems = styled.p`
text-align: end;
  font-weight: normal;
  font-size: 15px;
  color: #000;
  margin: 0;
`;

export const PlaceOrder = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(52, 53, 99, 0.2);
  overflow: hidden;
  position: relative;
  left:197px;
  color : white;
  font-weight: bold;
  background-color: black;
  :hover {
    font-weight: bold;
    background-color: green;
  }
`;