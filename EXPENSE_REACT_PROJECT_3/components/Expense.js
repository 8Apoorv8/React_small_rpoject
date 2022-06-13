import './Expense.css';
import ExpenseDate from './ExpenseDate';


function Expense(props) {
    return (
    <div className='Expense-item'>
        <ExpenseDate Date={props.Date}/>    
        <div className='Expense-item__description'>
            <h2>{props.Title}</h2>
            <div className='Expense-item__price'>${props.Amount}</div>
        </div>
    </div>);


};

export default Expense;