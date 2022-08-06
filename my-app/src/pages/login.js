import React, { Component } from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import {withRouter} from 'react-router-dom'
import { withRouter } from '../withRouter';

import axios from 'axios';


import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: "",
            password: ""
        }
        this.toast = React.createRef();
    }

    onSubmit = () => {
        console.log("first")
        if (this.state.customerId.trim() == "" || this.state.password.trim() == "") {
            this.toast.current.show({ severity: "warn", summary: "Warning", detail: 'Enter All Fields', life: 3500 });
        } else {
            axios.get(`http://localhost:3000/accounts?customerId=${this.state.customerId}`)
            .then(res => {
                if (res.data.length != undefined || res.data.length !== 0) {
                    if (res.data[0].password == this.state.password) {
                        console.log("success")
                        localStorage.setItem("customerId",this.state.customerId)
                        this.props.navigate("/overview")
                    } else {
                        this.toast.current.show({ severity: "error", summary: "Error", detail: 'Password is incorrect', life: 3500 });
                    }
                } else {
                    this.toast.current.show({ severity: "error", summary: "Error", detail: 'Account not found', life: 3500 });
                }
            })
            .catch(err => {
                console.log("err >> ",err)
                this.toast.current.show({ severity: "error", summary: "Error", detail: 'Something went wrong', life: 3500 });
            })
        }
    }


    render() {
        return (
            <div className="mainContainer">
                <Toast ref={this.toast} />
                <div className='customerIdContainer' style={{ marginBottom: 30 }}>
                    <div>Customer Id: </div>
                    <InputText
                        className="inputField"
                        onChange={e => { this.setState({ customerId: e.target.value }) }}></InputText>
                </div>
                <div className='customerIdContainer'>
                    <div>Password: </div>
                    <InputText
                        type={'password'}
                        className="inputField"
                        onChange={e => { this.setState({ password: e.target.value }) }}></InputText>
                </div>
                <Button style={{
                        // backgroundColor: "cadetblue",
                        borderRadius: "25px",
                        marginTop: "30px",
                        width: "130px",
                        height: "40px",
                        alignItems: 'center',
                        justifyContent: 'center'
                }} className="submitButton" onClick={this.onSubmit}>
                    Submit
                    </Button>
            </div>
        )
    }
}

export default withRouter(Login)
