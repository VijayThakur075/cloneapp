import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import { Navbar, Nav, Containr } from 'react-bootstrap';
import { Form, Modal, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import { FormControl, InputGroup } from 'react-bootstrap';
import { firebase } from '../../firebase';


export default function Header() {
    const x=1;
    return (
       <header className="header" data-testid="header">
           <nav>
               <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
               </div>
               <div className="setting">
                    <ul>
                        <li>+</li>
                        <li><FaPizzaSlice /></li>
                    </ul>
               </div>
           </nav>
       </header>
    )
}
