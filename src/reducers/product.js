import * as Types from './../constants/ActionType';
var initialState = [];
var findIndex = (products, id) => {
    var rs = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            rs = index;
        }
    });
    return rs;
}
const products = (state = initialState, action) => {
    var index=-1;
    var {id,products}=action;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state=action.products;
            return [...state];
            case Types.DELETE:
                index=findIndex(state,id);
                state.splice(index,1);
                return [...state];
                case Types.ADD_PRODUCT:state.push(action.products);
                return[...state];
                case Types.UPDATE:index=findIndex(state,products.id);
                state[index]=products;
                    return [...state]
        default: return [...state];
    }
}
export default products;