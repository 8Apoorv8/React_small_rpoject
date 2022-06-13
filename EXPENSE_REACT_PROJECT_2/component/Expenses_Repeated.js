import './Expenses_Repeated.css';
import Expense from './Expense';

function Expense_Repeated(props) {
    return (
        <div className="Expenses">
            <Expense
                Date={props.item[0].date}
                Title={props.item[0].title}
                Amount={props.item[0].amount}/>
            <Expense
                Date={props.item[1].date}
                Title={props.item[1].title}
                Amount={props.item[1].amount}/>
        </div>

    );
}

export default Expense_Repeated;