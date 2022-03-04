
const intialState = 0;
const ChangeNumber = (state= intialState,action) => {
    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - 1;
        default : return state;
    }
}

export default ChangeNumber;