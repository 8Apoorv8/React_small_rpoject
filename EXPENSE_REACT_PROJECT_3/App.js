import Expense from "./components/Expense";


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
            <Expense
            Date={expense[0].date}
            Title={expense[0].title}
            Amount={expense[0].amount}>

            </Expense>
            <Expense
            Date={expense[1].date}
            Title={expense[1].title}
            Amount={expense[1].amount}>

            </Expense>
        </div>
    );
}

export default App;