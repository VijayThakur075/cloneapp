import React from 'react'
import {
    FaInbox,
    FaChevronDown,
    FaRegCalendar,
    FaCalendarAlt
} from 'react-icons/fa'
import { useSelectedProjectValue } from '../../context'
import {useSelector} from 'react-redux'
import { Projects } from '../Projects'


export const Sidebar = () => {
    const showProjects= useSelector(state=> state.userShowProject.showProjects)
    const {selectedProject}= useSelectedProjectValue;

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generi">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Indox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar  />
                    </span>
                    <span>today</span>
                </li>
                <li>
                    <span>
                    <FaCalendarAlt />
                </span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className='sidebar__middle'>
                <span>
                    <FaChevronDown />
                </span>
                <h2>projects</h2>
            </div>
            <ul className="sidebar__projects">{showProjects && <Projects />}projects will be here!</ul>
           {showProjects && <Projects />}
        </div>
    )
}
