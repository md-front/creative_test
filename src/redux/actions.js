import * as types from './types'

export const showAlert = (e) => dispatch => {
    e.stopPropagation();
    dispatch({ type: types.SHOW_ALERT });
};