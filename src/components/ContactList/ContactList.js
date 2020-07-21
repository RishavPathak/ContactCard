import React from 'react'
import {Card} from 'react-bootstrap'

function ContactList(props) {
    return (
        <div>
            <Card>
               <Card.Header>Contact Name</Card.Header>
                {props.name}     {props.phonenumber}
            </Card>
        </div>
    )
}

export default ContactList
