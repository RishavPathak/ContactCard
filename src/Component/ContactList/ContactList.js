import React,{ useState } from 'react'
import {Card} from 'react-bootstrap'
import ContactDetailList from '../ContactdetailList/ContactDetailList'
import './ContactList.css'

function ContactList(props) {
    const [contactDetail, setcontactDetail] = useState([])
    const [isEnable, setisEnable] = useState(false)


    const handleContactDetails=(key)=>{
        setcontactDetail(props.details[key])
        if(props.details.length>0){
            setisEnable(true)
        }
    }


    const Contact = props.details.map((detail) => {
        return <div key={props.details.indexOf(detail)} onClick={()=>handleContactDetails(props.details.indexOf(detail))} className='contact-display-div'>
            <li className='contact-display'>
                {detail.name} 
            </li>
            <li className='contact-display'>
                {detail.phonenumber}
            </li>
        </div>
    })

    return (
        <div className='main-div'>
            <h3 className='contact-heading'>Contact List</h3>
            {Contact}
            <div className='contactdetaillist'>
            {isEnable?<ContactDetailList list={contactDetail}/>:null}
            </div>
        </div>
    )
}

export default ContactList
