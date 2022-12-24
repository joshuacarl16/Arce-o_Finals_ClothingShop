import { useContext, useEffect, useReducer, useState } from "react";
import { Product } from "../../models";
import {
  AddButton,
  QuantityText,
  Wrapper,
  MinusButton,
  Qlabel
} from "./QtyField.styled";

import { ShopContext } from "../Context/useContext";

export const Quantity = ({ name, imageUrl, price, quantity }: Product) => {
  const { updateCart } = useContext(ShopContext);

  const [qntty, setQuantity] = useState(quantity);

  useEffect(() => {
    updateCart({ name, imageUrl, price }, qntty);
  }, [qntty]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSub = () => {
    if (qntty > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    <Qlabel>
        <p>
            QUANTITY:
        </p>
    </Qlabel>
    <Wrapper>
    <AddButton onClick={handleAdd}>
        <p>+</p>
      </AddButton>
      <MinusButton onClick={handleSub}>
        <p>-</p>
      </MinusButton>
      <QuantityText>
        <p>{quantity}</p>
      </QuantityText>
    </Wrapper>
    </>
  );
};
