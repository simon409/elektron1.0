import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeCart } from '../store/cartSlice';

const CartInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      dispatch(initializeCart(cart));
    }
  }, [dispatch]);

  return null;
};

export default CartInitializer;
