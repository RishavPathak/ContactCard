import React from 'react'
import { Card } from 'react-bootstrap'
import './ContactDetailList.css'
function ContactDetailList(props) {
    return (
        <div className='contactdetailscard-outer-div'> 
            <Card className='contactdetailscard'>
                {
                    <div className='contactdetailscard-inner-div'>
                    <li>Name : {props.list.name}</li>
                    <li>Contact Number : {props.list.phonenumber}</li>
                    <li>Email Address : {props.list.email}</li>
                    <li>Working In : {props.list.company}</li>
                    </div>

                }
            </Card>
        </div>
    )
}

export default ContactDetailList
