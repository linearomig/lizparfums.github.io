import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productList } from '../data';
import { CartItem } from './CartItem';
import '../styles/view/cart.scss';


export const Cart = () => {

  const navigate = useNavigate();


  return (

    <div className='container'>
      <div className='conta'>

        <div className='cart'>
          <div className="row gutters">
            <div className="col-xl-9 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100 m-3">
                <div className="card-body">
                  <h1>Carro</h1>
                  <br />
                  <div className="cart">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='cart'>
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100 m-3">
                <div className="card-body">

                  
                    <div className="checkout">
                      <p> Subtotal: ${totalAmount} </p>
                      <button> Seguir Comprando </button>
                      <button >Checkout</button>
                    </div>
                  
                    <h1> Tu bolsa está vacía </h1>
                  


                </div>
              </div>
            </div>
          </div>
        </div>
  

    </div>
    </div >

  )
};

export default Cart;
