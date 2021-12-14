import {SET_ACTIVE, SET_SHOW_PROJECT } from "../action";

const intialState = {
    active: 'inbox',
    showProjects: true,
}

const userShowProject = (state = intialState, action) => {
   
    switch (action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
                
            };
            case SET_SHOW_PROJECT:
                return{
                    ...state,
                    showProjects: action.payload
                }

        default:
            return state;
    }
    
}
export default userShowProject;