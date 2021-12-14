import { SET_ARCHIVEDTASKS } from "../action";

const intialState = {
    archivedTasks: []
}

const userArchivedTasks = (state = intialState, action) => {
   
    switch (action.type) {
        case SET_ARCHIVEDTASKS:
            return {
                ...state,
                archivedTasks: action.payload,
                
            };

        default:
            return state;
    }
    
}
export default userArchivedTasks;