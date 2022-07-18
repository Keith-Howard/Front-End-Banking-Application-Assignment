import React from 'react';
import contextExports from './context.js';

function Transaction(props) {
    const currentUserCtx = React.useContext(contextExports.currentUserContext);
    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(contextExports.UserContext);

        function validateNumber(number) {
            if (isNaN(Number(number)) || Number(number) <= 0 || number === null || number.match(/[a-z]/i)) {
                return false;
            }
            return true;
        }   

        function validateAmount() {
            if (!validateNumber(amount)){
                alert('Please enter a valid positive number');
                return false;
            } else if (props.transactionType === 'WITHDRAW' && Number(amount) > ctx.users[currentUserCtx.index].balance){
                alert('Insufficent funds')
                return false;
            } 
            return true;
        }
        

        function getNewBalance(enteredAmount) {
            if (props.transactionType === 'DEPOSIT') {
                ctx.users[currentUserCtx.index].balance = Number(ctx.users[currentUserCtx.index].balance) + Number(enteredAmount);
            } else {
                ctx.users[currentUserCtx.index].balance = Number(ctx.users[currentUserCtx.index].balance) - Number(enteredAmount);
            }
        }

        function makeTransaction(event) {
            if (validateAmount()) {
                alert(`Your ${props.transactionType} of $${Number(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} Was Processed`);
                getNewBalance(amount);
            }
            setAmount(0);
            clearForm();
            event.preventDefault()
        }

        function clearForm() {
            document.getElementById(props.transactionType).value = '';
        }

        return (
            <contextExports.CardBootstrap
            cardWidth='45%'
            bgcolor="info"
            txtcolor="white"
            fontSizeHeader="3.95"
            headerBgColor="#F65058FF"
            header={props.transactionType}
            headerDisplay='flex'
            headerJustifyContent='center'
            bodyContainerWidth='500px'
            body={currentUserCtx.loginStatus ? (
                <>
                    <br/>
                        <div >
                            <label htmlFor="balance"><h2 style={{fontSize: '3.25em', alignItems: 'left !important'}}>BALANCE</h2></label>
                            <input id="balance" style={{maxWidth: "250px", fontSize: '3.50em', height: '58px', justifyItems: 'right', textAlign: 'right'}} readOnly 
                            value={ctx.users[currentUserCtx.index].balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} className="form-control float-right bg-info border-info text-white"/>
                        </div>
                    <br/>
                    <br/><h2 style={{fontSize: '3em', justifyContent: 'left'}}>{props.transactionType} AMOUNT</h2>
                    <br/><input style={{maxWidth: '100%',height: '75px', fontSize: '3.25em', margin: 'auto', textAlign: "right"}} type="input" className="form-control" id={props.transactionType}
                    onChange={e => setAmount(e.currentTarget.value)} />
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{width: '300px', fontSize: '3em'}} disabled={!validateNumber(amount)} type="submit" className="btn btn-light" onClick={makeTransaction}>{props.transactionType}</button>
                    </div>
                </>
            ):(
                <div>
                    <h2>LOGIN TO USE FEATURE, THANKS</h2>
                </div>
            )
            }
            />
        );
}
export default Transaction;