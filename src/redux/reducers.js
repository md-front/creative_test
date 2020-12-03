import {
    SHOW_ALERT,
} from './types';

const app = (state = {}, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                showAlert: true
            }
        default:
            return state
    }
}

export default app
