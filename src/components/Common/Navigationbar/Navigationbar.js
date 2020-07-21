import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AddContact from '../../AddContact/AddContact'
import './Navigationbar.css'
function Navigationbar() {
  return (
    <div className='nav-bar'>

      <FontAwesomeIcon className='search-icon-moving-right' icon={faSearch} />

      
        <Button className='nav-bar-button' variant='link'> 
          Edit
         </Button> 
        <FontAwesomeIcon  className='message-icon-moving-right' icon={faEnvelope} />
        <h6>Rishav</h6>
      

    </div>
  )
}

export default Navigationbar
