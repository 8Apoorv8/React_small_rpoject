
import Expense_Repeated from "./components/Expenses_Repeated";

function App()
{
    let expense = [
        { 
            id:"e1",
            date:new Date(2021,4,21),
            title:"school-fee",
            amount:400
        },
        { 
            id:"e2",
            date:new Date(2020,2,11),
            title:"MEdical-fee",
            amount:3000
        }
    ];
    return (
        <div>
            <h2>LET's get started</h2>
            <Expense_Repeated item={expense}/>
        </div>
    );
}

export default App;