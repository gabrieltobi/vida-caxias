import './modal.scss'

import React, { Component } from 'react'
import { Form } from '../../../../utils/Form'
import Input from '../../../../components/input/input'
import Loading from '../../../../components/loading/loading'

class Modal extends Component {
    componentDidMount() {
        const validationText = 'Informe um telefone ou um e-mail por favor'
        const phoneInput = this.formRef.current['phone']
        const emailInput = this.formRef.current['email']
        phoneInput.setCustomValidity(validationText)
        emailInput.setCustomValidity(validationText)
        this.props.setInvalidFeedback('phoneInput', validationText)
        this.props.setInvalidFeedback('emailInput', validationText)
    }

    state = {
        formWasValidated: false,
        loading: false
    }

    formRef = React.createRef()

    checkEmailAndPhone = (evt) => {
        const {
            fields,
            setInvalidFeedback
        } = this.props

        const input = evt.target
        const field = input.name
        const form = input.form

        const phoneInput = form['phone']
        const emailInput = form['email']
        let validationText = ''

        if (!phoneInput.value && !emailInput.value) {
            validationText = 'Informe um telefone ou um e-mail por favor'
        }

        phoneInput.setCustomValidity(validationText)
        emailInput.setCustomValidity(validationText)
        setInvalidFeedback('phoneInput', validationText)
        setInvalidFeedback('emailInput', validationText)

        fields[field].onChange(evt)
    }

    onSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        if (!form.checkValidity()) {
            return this.setState({ formWasValidated: true })
        }

        const {
            values: {
                name,
                phone,
                email
            }
        } = this.props

        this.setState({ loading: true })

        fetch('https://api.mailgun.net/v3/sandbox43aa68466a0e4cc695a0a9d7dc90040b.mailgun.org/messages', {
            method: 'POST',
            headers: {
                'api': 'pubkey-f83d83ec9eb8d6948bcfba407422ddec'
            }
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(console.error);
        console.log(name)
        console.log(phone)
        console.log(email)
    }

    render() {
        const { closeModal, title, fields } = this.props
        const { formWasValidated, loading } = this.state

        return (
            <React.Fragment>
                <div className='modal-form modal fade show' role='dialog' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='exampleModalLongTitle'>{title}</h5>

                                <button type='button' className='close' data-dismiss='modal' aria-label='Fechar'
                                    onClick={closeModal}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <form className={`${formWasValidated ? ' was-validated' : ''}`} onSubmit={this.onSubmit} noValidate ref={this.formRef}>
                                <div className='modal-body text-center'>
                                    <span>Que ótimo, nos deixe algum contato que logo retornamos para você. 😃</span>

                                    <div className='text-left'>
                                        <Input
                                            label='Seu nome:'
                                            title='Informe seu nome por favor'
                                            required
                                            {...fields.name}
                                        />

                                        <Input
                                            type='tel'
                                            label='Seu telefone:'
                                            title='Informe seu telefone ou e-mail por favor'
                                            mask='(99) 99999-9999'
                                            {...fields.phone}
                                            onChange={this.checkEmailAndPhone}
                                        />

                                        <Input
                                            type='email'
                                            label='Seu e-mail:'
                                            title='Informe seu e-mail ou telefone por favor'
                                            {...fields.email}
                                            onChange={this.checkEmailAndPhone}
                                        />
                                    </div>
                                </div>

                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={closeModal}>Fechar</button>
                                    <button type='submit' className='btn btn-success'>Enviar Contato</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='modal-backdrop fade show' onClick={closeModal}></div>

                {loading && <Loading />}
            </React.Fragment>
        )
    }
}

const fields = [
    'name',
    'phone',
    'email'
]

export default Form(Modal, fields)