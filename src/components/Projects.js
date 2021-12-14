import React from 'react'
import { useState } from 'react'
import {useSelectedProjectValue, useProjectsValue} from '../context'

export const Projects=(activeValue = null) =>{ 
    const[active, setAactive] =useState(activeValue)
    const {setSelected}= useSelectedProjectValue;
    const {data} = useProjectsValue;
    // console.log("hhhhhhhhhhhhhh",data.projectId);
    console.log('jjjjjjjjj',JSON.stringify(data));

    return (
        <div>{
         data &&
       data.map((project)=>(
           <li 
           key={project.projectId}
           data-doc-id={project.docId}
           data-testedId="project-action"
           className={
               active === project.projectId
               ? 'active sidebar__project'
               : 'sidebar__project'
           }
           onkeyDown ={()=>{
            setAactive(project.projectId);
            setSelected(project.projectId)
        }}
           onClick ={()=>{
               setAactive(project.projectId);
               setSelected(project.projectId)
           }}
           > 
           {JSON.stringify('project',project)}
                vijay project

           </li>
       ))
        }</div>
    )
}
