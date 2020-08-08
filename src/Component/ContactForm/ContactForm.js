import React, { Component } from 'react'
import { Form, FormControl} from 'react-bootstrap'
import ContactList from '../ContactList/ContactList';
import './ContactForm.css'

export class ContactForm extends Component {

    state = {
        array: [],
        fullname: '',
        phonenumber: '',
        email: '',
        company: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const updatedDetails = {
            name: this.state.fullname,
            phonenumber: this.state.phonenumber,
            email: this.state.email,
            company: this.state.company,
        }

        if (updatedDetails.name !== '' && updatedDetails.phonenumber !== '' && updatedDetails.email !== '' && updatedDetails.company !== '') {
            const item = [...this.state.array, updatedDetails]
            this.setState({
                array: item,
                fullname: '',
                phonenumber: '',
                email: '',
                company: ''
            })
        }
    }

    handleChangeName = (e) => {
        e.preventDefault()
        this.setState({
            fullname: e.target.value,
        })
    }

    handleChangePhonenumber = (e) => {
        e.preventDefault()
        this.setState({
            phonenumber: e.target.value,
        })
    }

    handleChangeEmail = (e) => {
        e.preventDefault()
        this.setState({
            email: e.target.value,
        })
    }

    handleChangeCompany = (e) => {
        e.preventDefault()
        this.setState({
            company: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className='contact-form-card'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormControl className='form-element' type='text' value={this.state.fullname} onChange={this.handleChangeName} placeholder='Fullname' />
                        <FormControl className='form-element' type='text' value={this.state.phonenumber} onChange={this.handleChangePhonenumber} placeholder='Mobile Number' />
                        <FormControl className='form-element' type='text' value={this.state.email} onChange={this.handleChangeEmail} placeholder='abc@xyz' />
                        <FormControl className='form-element' type='text' value={this.state.company} onChange={this.handleChangeCompany} placeholder='Company Name' />
                        <button
                        className='form-submit-button'
                        >
                            Save Contact
                        </button>
                    </Form>
                </div>
                {this.state.array.length > 0 ? <ContactList details={this.state.array} />: null }
            </div>
        )
    }
}

export default ContactForm
