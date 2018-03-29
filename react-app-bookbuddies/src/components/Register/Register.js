import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import './Register.css'
import userProfile from '../../images/userProfile.jpg'
import firebase from 'firebase'

import swal from 'sweetalert2'

import booksBuddiesApi from './../../api/bookBuddiesApi'


class Register extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",
            uploadValue: "",
            picture: userProfile
        }
    }


    handleName = (_name) => {
        this.setState({
            name: _name
        })

    }

    handleUsername = (_username) => {
        this.setState({
            username: _username
        })

    }

    handleEmail = (_email) => {
        this.setState({
            email: _email
        })

    }

    handlePassword = (_password) => {
        this.setState({
            password: _password
        })

    }

    handleConfirmPassword = (_password) => {
        this.setState({
            confirmPassword: _password
        })

    }

    handleDescription = (_description) => {
        this.setState({
            description: _description
        })

    }

    handleSubmit = () => {

        if (this.state.password !== this.state.confirmPassword) {
           return swal({
                type: 'error',
                title: 'Contraseñas no coinciden',
                showConfirmButton: true,
                timer: 3000
            })
        }
        const {name, username, email, password, description, picture} = this.state

        booksBuddiesApi.registerUser(name, username, email, password, description, picture)
        .then(register => {

            swal({
                type: 'success',
                title: 'Usuario registrado correctamente',
                timer: 1500
            })
        })
        .then(() => {
            this.props.history.push('/login')
        })

    }

    handleUpload = (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`/profiles/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            console.log(error.message)
        }, () => {
            this.setState({
                uploadValue: 100,
                picture: task.snapshot.downloadURL
            })
        })
    }


    render() {
        return (
            
            <section className="hero is-fullheight is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-6 is-offset-3 has-text-left">
                                <h1 id="title" className="title">
                                    Registrar Nuevo Usuario
                                </h1>
                                <div id="container" className="box">
                                <form
                                    onSubmit={e => {
                                        e.preventDefault()
                                        this.handleSubmit()
                                    }}
                                >
                                    <label className="label">Nombre Completo</label>
                                    <p className="control">
                                        <input 
                                        onChange={(name) => this.handleName(name.target.value)}
                                        className="input" 
                                        type="text" 
                                        placeholder="John Smith" required />
                                    </p>
                                    <label className="label">Username</label>
                                    <p className="control">
                                        <input
                                        onChange={(username) => this.handleUsername(username.target.value)} 
                                        className="input" 
                                        type="text" 
                                        placeholder="John23" required />
                                    </p>
                                    <label className="label">Email</label>
                                    <p className="control">
                                        <input
                                        onChange={(email) => this.handleEmail(email.target.value)} 
                                        className="input" 
                                        type="text" placeholder="jsmith@example.com" required />
                                    </p>
                                    <hr />
                                    <label className="label">Contraseña</label>
                                    <p className="control">
                                        <input 
                                        onChange={(password) => this.handlePassword(password.target.value)}
                                        className="input" type="password" placeholder="●●●●●●●" 
                                        required />
                                    </p>
                                    <label className="label">Confirma Contraseña</label>
                                    <p className="control">
                                        <input
                                        onChange={(password) => this.handleConfirmPassword(password.target.value)} 
                                        className="input" type="password" placeholder="●●●●●●●" 
                                        required />
                                    </p>
                                    <hr />
                                    <label className="label">Cuentanos algo sobre ti </label>
                                    <p className="control">
                                        <textarea 
                                        onChange={(description) => this.handleDescription(description.target.value)}
                                        className="textarea" placeholder="Libros favoritos, géneros literarios, autores, etc." 
                                        required/>

                                    </p>
                                    <hr />
                                     <label className="label">Elige foto de perfil</label>
                                    <div className="control">
                                        <figure >

                                            <img className="image is-128x128" src={this.state.picture} alt="Profile" />

                                        </figure>
                                        <progress value={this.state.uploadValue} mx="100"></progress>
                                        <br />
                                        <input type="file" onChange={this.handleUpload} />
                                    </div>
                                    <hr />
                                    <p className="control">
                                        <button className="button is-primary">Registrar</button>
                                        <button id="cancel" className="button is-danger">Cancel</button>
                                    </p>
                                </form>    
                                </div>
                                <p className="has-text-centered">
                                    <Link to="/login"
                                     href="../login/login.html">Ya tengo cuenta 
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Register)