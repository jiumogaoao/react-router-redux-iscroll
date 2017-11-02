const todo = ( state={} ,action ) =>{
    switch ( action.type ){
        case "Add_Default":
            state.c='0'
            return state
        default:
            return state;
    }
}

export default  todo