import React from 'react';

import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import '../App.css';


const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};


function Paystack() {
    const componentProps = {
        ...config,
        text: "Buy Now",
        onSuccess: () => null,
        onClose: () => null
    };

  return (
   
    
        <PaystackButton className="btn btn-secondary btn-sm" {...componentProps} />
        
  
  );
}

export default Paystack;