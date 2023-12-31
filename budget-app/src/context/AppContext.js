
import {createContext, useReducer} from 'react'


const AppReducer = ( state, action) =>{
    switch(action.type){
        case 'add_Expense':
            return{
                ...state,
                expenses:[...state.expenses, action.payload]
            };
            case 'delete_expense':
                return{
                    ...state,
                    expenses: state.expenses.filter((expense) =>
                    
                        expense.id!=action.payload
                    )
                }
                case 'edit_expense':
                    return{
                        ...state,
                        budget:[action.payload]
                    }
                   
        default:
            return state;
    }
}

const initialState ={
    budget :2000,
    expenses:[
        {
            id:12, name:'shopping', cost:40
        },
        {
            id:13, name:'holiday', cost:400
        },
        {
            id:14, name:'food', cost:40
        },
        {
            id:15, name:'travel', cost:400
        },
    ]
}


export const AppContext = createContext();

export const AppProvider =(props)=>{
const [state, dispatch] = useReducer(AppReducer, initialState);

return(
    <AppContext.Provider value={{
        budget: state.budget,
        expenses:state.expenses,
        dispatch,
    }}>{props.children}</AppContext.Provider>
)
}