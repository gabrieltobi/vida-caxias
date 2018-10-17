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
        loading: false,
        success: false,
        error: false
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
            },
            title,
            closeModal
        } = this.props

        this.setState({ loading: true })

        fetch('https://mzxsx1e07g.execute-api.us-east-1.amazonaws.com/default/mailsender', {
            method: 'POST',
            body: JSON.stringify({
                subject: title,
                name,
                phone,
                email
            }),
            headers: {
                'x-api-key': 'EcNOWfwNaB2LZCS6TCX29aSHkgHdNYXXpsjihBlg',
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.setState({ success: true }))
            .catch(console.error)
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        const { closeModal, title, fields } = this.props
        const { formWasValidated, loading, success } = this.state

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
                                    {
                                        !success &&
                                        <React.Fragment>
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
                                        </React.Fragment>
                                    }

                                    {
                                        success &&
                                        <div className='alert alert-success' role='alert'>
                                            Tudo certo. Em breve entraremos em contato. 😃
                                        </div>
                                    }
                                </div>

                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={closeModal}>Fechar</button>
                                    {
                                        !success &&
                                        <button type='submit' className='btn btn-success'>Enviar Contato</button>
                                    }
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