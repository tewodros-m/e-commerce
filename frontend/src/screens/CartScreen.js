import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { CART_ADD_ITEM } from '../constants/cartConstants';
import { addToCart } from '../actions/cartActions';

function CartScreen() {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return <div>CartScreen</div>;
}

export default CartScreen;
