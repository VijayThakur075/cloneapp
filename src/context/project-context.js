import React,{useContext, createContext} from "react";
import { useProjects } from "../hooks";
import {useSelector, useDispatch } from 'react-redux';
import { setProject } from "../action";

export const ProjectContext = createContext();
export const ProjectsProvider = ({children}) => {
    const selector = useSelector((state)=> state.userProject.projects)
    const dispatch = useDispatch();
    const data =dispatch(setProject())
    console.log("zxcv", data);

    return(
        <ProjectContext.Provider value={selector, data}>
            {children}
            </ ProjectContext.Provider>
    );
};

export const useProjectsValue = () => useContext(ProjectContext);
