import {combineReducers} from 'redux';
import products from './product';
import itemEditting from './ItemEdit';
const appReducers=combineReducers({
    products,itemEditting
});
export default appReducers;