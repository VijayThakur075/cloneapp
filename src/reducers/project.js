import { SET_PROJECT } from "../action";

const intialState = {
    projects: null
}

const userProject = (state = intialState, action) => {
    switch (action.type) {
        case SET_PROJECT:
            return {
                ...state,
                projects: action.payload,
            };

        default:
            return state;
    }
}
export default userProject;