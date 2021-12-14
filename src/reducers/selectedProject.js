import { SET_SELECTED_PROJECT } from "../action";

const intialState = {
    selectedProject: 'INBOX',
}

const userSelectedProjects = (state = intialState, action) => {
    switch (action.type) {
        case SET_SELECTED_PROJECT:
            return {
                ...state,
                selectedProject : action.payload,
            };

        default:
            return state;
    }
}
export default userSelectedProjects;