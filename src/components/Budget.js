import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {currency} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload : event.target.value
        })
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" defaultValue={2000} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
