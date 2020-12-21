const {createStore} = require('redux');

const initialState = {
    age: 21
};

const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT';

const myReducer = (state = initialState, action)=>{

    const newState = {...state};

    switch(action.type){
        case ADD:
            newState.age += action.payload;
            return newState;
        case SUBTRACT:
            newState.age -= action.payload;
            return newState;
        default:
            return newState;
    }
};

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed :' + JSON.stringify(store.getState()));
})

store.dispatch({type: ADD,  payload: 1});
store.dispatch({type: SUBTRACT, payload: 1});
store.dispatch({type: ADD, payload: 10});
store.dispatch({type: SUBTRACT, payload: 5});



