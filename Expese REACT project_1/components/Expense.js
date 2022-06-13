import './Expense.css';

function Expense(props) {
    const Month=props.Date.toLocaleString('en-US',{month: "long"});
    const year=props.Date.getFullYear();
    const date=props.Date.toLocaleString("en-US",{date: "2-digit"});



    return (
    <div className='Expense-item'>
        <div >
            <div>{Month}</div>
            <div>{year}</div>
            <div>{date}</div>
        </div>
        <div className='Expense-item__description'>
            <h2>{props.Title}</h2>
            <div className='Expense-item__price'>${props.Amount}</div>
        </div>
    </div>);


};

export default Expense;