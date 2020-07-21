import React, { Component } from 'react'
import { Button, Form, FormControl, FormGroup, Card } from 'react-bootstrap'
import './AddContact.css'
import ContactList from '../ContactList/ContactList'

export class AddContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phonenumber: '',
            company: '',
            email: '',
        }
    }
    handleSaveButton = (e) => {
        e.preventDefault();
    }
    handlePhoneNumber = (e) => {
        
        this.setState({ 
            ...this.state,
            phonenumber: e.target.value })
    }
    handleChangeName = (e) => {
        this.setState({ 
            ...this.state,
            name: e.target.value })
    }
    handleCompany = (e) => {
        
        this.setState({ 
            ...this.state,
            company: e.target.value })
    }
    handleEmail = (e) => {
        
        this.setState({ 
            ...this.state,
            email: e.target.value })
    }



    render() {
        return (
            <div>
                <Card className='add-contact-card'>
                    <Form>
                        <FormGroup controlId='formBasicName'>
                            <FormControl type='text' value={this.state.name} onChange={this.handleChangeName} placeholder='Contact Name' />
                        </FormGroup>
                        <FormGroup controlId='formBasicNumber'>
                            <FormControl type='text' value={this.state.phonenumber} onChange={this.handlePhoneNumber} placeholder='Contact Number' />
                        </FormGroup>
                        <FormGroup controlId='formBasicCompanyName'>
                            <FormControl type='text' value={this.state.company} onChange={this.handleCompany} placeholder='Company Name' />
                        </FormGroup>
                        <FormGroup controlId='formBasicEmailId'>
                            <FormControl type='email' value={this.state.email} onChange={this.handleEmail} placeholder='xyz@abc.com' />
                        </FormGroup>
                        <Button
                            className='save-buton'
                            onClick={this.handleSaveButton}
                        >
                            Save
                   </Button>
                    </Form>
                </Card>
                <ContactList name={this.state.name} phonenumber={this.state.phonenumber} />
            </div>
        )
    }
}

export default AddContact

