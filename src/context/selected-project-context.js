import React, { useContext, createContext } from "react";;
import { useSelector,  useDispatch } from 'react-redux';
import { setSelectedProject } from "../action";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
    const selectedProject = useSelector((state) => state.userSelectedProjects.selectedProject)
    const dispatch = useDispatch();
    const setSelected =dispatch(setSelectedProject())

    return (
        <SelectedProjectContext.Provider value={selectedProject, setSelected}>
            {children}
        </ SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
