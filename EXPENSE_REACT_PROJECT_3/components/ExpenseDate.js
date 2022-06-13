

import './ExpenseDate.css';

function ExpenseDate(props)
{
    const Month=props.Date.toLocaleString('en-US',{month: "long"});
    const year=props.Date.getFullYear();
    const date=props.Date.toLocaleString("en-US",{date: "2-digit"});


    return (
        <div >
            <div>{Month}</div>
            <div>{year}</div>
            <div>{date}</div>
        </div>
    )
};

export default ExpenseDate;