import { SET_TASK } from "../action";

const intialState = {
    tasks: []
}

const userTasks = (state = intialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: action.payload,
            };

        default:
            return state;
    }
}
export default userTasks;