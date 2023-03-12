import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
    
  return (
    <div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount} />


</div>      
   
  
  );
}

export default ExpenseItem;
