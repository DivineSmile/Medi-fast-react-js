import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
function Paypal(props){
  
        return (
            <PaypalExpressBtn env={props.env} client={props.client} currency={props.currency} total={parseFloat(props.toPay.toFixed(1))} onError={props.transcationError} onSuccess={(payment)=>props.onSuccess(payment,props.cartItems)} onCancel={props.transcationCancelled} 
            style={{
                size:'large',
                color:'blue',
                shape:'rect',
                label:'checkout',
            }}/>
        );
    }
export default Paypal;