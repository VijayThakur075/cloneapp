export const SET_PROJECT = "SET_PROJECT";
export const SET_TASK = "SET_TASK";
export const SET_ARCHIVEDTASKS = "SET_ARCHIVEDTASKS";
export const SET_SELECTED_PROJECT = "SET_SELECTED_PROJECT";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_SHOW_PROJECT = "SET_SHOW_PROJECT"

export const setProject = (payload) => ({ type: SET_PROJECT, payload });
export const setTask = (payload) => ({type: SET_TASK, payload});
export const setArchivedTasks = (payload) => ({type: SET_ARCHIVEDTASKS, payload});
export const setSelectedProject = (payload) => ({type: SET_SELECTED_PROJECT, payload});
export const setActive = (payload) => ({type: SET_ACTIVE, payload});
export const setShoeProject = (payload) => ({type: SET_SHOW_PROJECT, payload})