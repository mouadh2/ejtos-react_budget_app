import React, {useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () =>{
    const{currency} = useContext(AppContext);
    const{expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=>{
return (total += item.cost);
},0);
return(
  <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>  
);
};

export default ExpenseTotal;
