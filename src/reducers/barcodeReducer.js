import {GET_BARCODE} from '../actions/types';

const initialState = {
};

export default function(state=initialState, action){
  switch (action.type) {
    case GET_BARCODE:
      return action.payload;

    default:
        return state;
  }
}
