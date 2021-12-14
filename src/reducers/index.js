import { combineReducers } from "redux";
import userProject from "./project";
import userTasks from "./task";
import userArchivedTasks from "./archivedtasks";
import userSelectedProjects from "./selectedProject";
import userShowProject from "./showproject";

const reducer=combineReducers({
    userProject,
    userTasks,
    userArchivedTasks,
    userSelectedProjects,
    userShowProject,
})

export default reducer;