import React,{Fragment, useEffect} from 'react'
import Metadata from '../layout/Metaata'
 import { useAlert } from 'react-alert'
import { useDispatch , useSelector } from 'react-redux'
import { createOrder,clearerrors } from '../actions/orderActions'

const ConfirmOrder=({history})=>{
    const alert=useAlert();
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.auth);
    const { cartItems ,shippinginfo} = useSelector(state => state.cart)
    const{error}=useSelector(state=>state.neworder)


    useEffect(()=>{
        if(error){
            alert.error(error);
            console.log(error);
            dispatch(clearerrors())
        }

    },[alert,dispatch,error])

    const order={
        orderItems:cartItems,
        shippingInfo:shippinginfo,
        itemsPrice:(cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0))
    }
  
    const submithandler=async (e)=>{
      e.preventDefault();

  
                  dispatch(createOrder(order))
                  alert.success('Order Placed Succesfully')
                  history.push('/');
                 
    }

    return(
       
        <Fragment>
        <Metadata title={'Payment '}/>
        <div className="row wrapper">
    <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submithandler}>
           
          
            
           
  
        
            <button
              id="pay_btn"
              type="submit"
              className="btn btn-block py-3"
            >
              Confirm COD Order Of ${cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0)}
            </button>

          </form>
          </div>
    </div>
    </Fragment>
	
    )

}

export default ConfirmOrder;