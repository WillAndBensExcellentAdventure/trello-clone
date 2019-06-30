import React, { PureComponent } from 'react'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

export default class SignUpForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(type, e) {
        this.setState({ [type]: e.target.value})
    }

    handleSubmit() {
        axios.post('/api/signup', this.state).then(response => {
            console.log(response);
            
        }).catch(err => {
            console.log(err);
            
        })
    };

    handleLogin() {
        axios.post('/api/login', this.state).then(response => {
            console.log(response);
            
        }).catch(err => {
            console.log(err);
            
        })
    }

    handleTest() {
        axios.post('/api/test', this.state).then(res => {
            console.log(res);
            
        }).catch(err => console.log(err));
        
    }
    handleTest2() {
        axios.get('/api/test2').then(res => {
            console.log(res);
            
        }).catch(err => console.log(err));
        
    }
    

    render() {
        // axios.get('/api').then(res => console.log(res));
        return (
            <div>
                <TextField onChange={e => this.handleChange('username', e)} label="username" />
                <TextField onChange={e => this.handleChange('password', e)} label="password" />
                <Button onClick={() => this.handleSubmit()}>Submit</Button>
                <Button onClick={() => this.handleLogin()}>Login</Button>

                <Button onClick={() => this.handleTest()}>Test</Button>
                <Button onClick={() => this.handleTest2()}>Test2</Button>

            </div>
        )
    }
}
