// default state
const defaultState = {
    data: null
}

export default function data(state=defaultState, action){
    switch(action.type){
        case "FETCH_DATA": 
            return {
                ...state,
                data: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

