import './ExpenseItem.css';

const ExpenseDetails=(props)=> {
    const title = props.title
    const amount = props.amount
    const loc = props.location

   
  return (
    
        
    <div className='expense-item__description'>
    <h2>{title}</h2>,
    <h2>{loc}</h2>
    <div className='expense-item__price'>Rs.{amount}</div>
    
</div>

        
   
  
  );
}

export default ExpenseDetails;
