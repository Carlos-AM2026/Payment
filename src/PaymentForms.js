import React from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import swal from 'sweetalert';

const PaymentForms = () => {

    const [state, setState] = useState({
        number: " ",
        name: " ",
        expiry: " ",
        cvc: " ",
        focus: " "
    });

    const handleInpuntChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusedChange = (e) => {
        setState({
            ...state,
            focused : e.target.name
        })
    }

    const processPayment = () => {
        console.log("number => ", state.number);
        console.log("name => ", state.name);
        console.log("expiry => ", state.expiry);
        console.log("cvc => ", state.cvc);
        console.log(JSON.stringify(state));

        swal("Enviar", "¿Desea continuar con el pago de su servicio?",{
            icon: "warning",
            buttons: {
              cancel: "Cancelar",
              allow: {
                text: "Confirmar",
                value: "confirmar",
              },
            },
          }).then((value) =>{
            switch(value){
      
              case "confirmar":
                swal("Se ha confirmado el pago", "Pago efectuado", {button: "Aceptar", icon: "success"}).then((result) => {
                    window.location.reload();
                  });
                break;
      
                default:
                  swal("Se ha cancelado el pago", "Pago cancelado", {button: "Aceptar", icon: "error"}).then((result) => {
                    window.location.reload();
                  });
            }
          });
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <Cards
                    number = {state.number}
                    name = {state.name}
                    expiry = {state.expiry}
                    cvc = {state.cvc}
                    focused = {state.focused}
                    />
                <form id='form'>
                    <div className='form-group'>
                        <label htmlFor = 'number'>Número de la tarjeta</label>
                        <input type = "text" name = "number" id = "number" className = 'form-control' onChange={handleInpuntChange} onFocus={handleFocusedChange} maxLength = "16" placeholder='**** **** **** ****' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor = 'name'>Nombre del propietario</label>
                        <input type = "text" name = "name" id = "bane" className = 'form-control' onChange={handleInpuntChange} onFocus={handleFocusedChange} maxLength = "30" placeholder='Dhalia Elena Amador Marquez' />
                    </div>
                    <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor = 'expiry'>Fecha de expiración</label>
                        <input type = "text" name = "expiry" id = "expiry" className = 'form-control' onChange={handleInpuntChange} onFocus={handleFocusedChange} maxLength = "4" placeholder='****' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor = 'cvc'>CVC</label>
                        <input type = "text" name = "cvc" id = "cvc" className = 'form-control' onChange={handleInpuntChange} onFocus={handleFocusedChange} maxLength = "4" placeholder='****' />
                    </div>
                    </div>
                    <button onClick={processPayment} type='button' className='btn btn-success btn-block btn-lg'>Pagar</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentForms;