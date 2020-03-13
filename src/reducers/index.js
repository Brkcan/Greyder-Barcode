import { combineReducers } from "redux";
import barcodeReducer from './barcodeReducer';

export default combineReducers({
  barcode: barcodeReducer,

});
