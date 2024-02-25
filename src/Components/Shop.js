import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'

const Shop = () => {
    const dispatch=useDispatch();
    const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)
    const balance=useSelector(state=>state.amount)
  return (
    <>
    <h2>Deposit/Withdraw Money</h2>
    <div>
        {/* <button className="btn btn-primary"onClick={()=>dispatch.actionCreators.withrawMoney(100)}>-</button>
        Update balance
         <button className="btn btn-primary" onClick={()=>dispatch.actionCreators.depositMoney(100)}>+</button> */}

         <button className="btn btn-primary"onClick={()=>{withdrawMoney(100)}}>-</button>
        Update balance ({balance})
         <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
    </>
  )
}

export default Shop