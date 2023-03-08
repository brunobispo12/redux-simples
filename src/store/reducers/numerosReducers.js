const initialState = {
    min: 1,
    max: 10
}


export default function reduceNumber (state = initialState, action) {

    switch(action.type){
        case 'NUM_MIN_ALT':
            return{
                ...state,
                min: action.payload
            }
        case 'NUM_MAX_ALT':
            return{
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}