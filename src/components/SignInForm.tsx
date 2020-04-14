/* eslint-disable no-lone-blocks */
/* login.jsx */
import React from "react";
import { Grid, Label, Input, Button } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import login from "../login.svg";


export interface IFormSectionProps {
    toggleButton: (isLogin: boolean) => void;
    isLogin: boolean;
    userName: string;
    password: string;
    //submitForm: boolean;
}

interface IState {
    userName: string;
    password: string;
    isLogin: boolean;
    errName: string;
    errPassword: string;
}

export class SignInForm extends React.Component<IFormSectionProps, IState> {
    constructor(props: IFormSectionProps) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            isLogin: false,
            errName: "",
            errPassword: ""
        }
        this.changeValue = this.changeValue.bind(this);
        this.changeValue1 = this.changeValue1.bind(this);
    }

    public toggleButton = (isLogin: boolean): void => {
        this.setState({ isLogin: false })
    }


    changeValue = (event: React.FormEvent<HTMLInputElement>) => {
        let input = event.currentTarget.value
        this.setState({
            userName: input
        });

    }

    changeValue1 = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            password: event.currentTarget.value
        })
    }

    login = (isLogin: boolean): void => {
        this.setState({
            isLogin: isLogin
        });
    }

    validate = (userName: string, password: string, isLogin: boolean) => {
        const correctUser = "Olawale";
        const passwordInput = "Hello123!";

        this.setState({
            userName: userName,
            password: password,
            errName: "",
            errPassword: ""
        });

        const errName = "User Name either omitted or wrong!";
        const errPassword = "Password either omitted or wrong!";

        if ((userName.toLowerCase() === correctUser.toLowerCase()) && (password === passwordInput)) {
            isLogin = true;
            this.login(isLogin);
        } else if ((userName.toLowerCase() !== correctUser.toLowerCase()) && (password !== passwordInput)) {
            this.setState({
                errName: errName,
                errPassword: errPassword
            });
        }
        else if (password !== passwordInput) {
            this.setState({
                errPassword: errPassword
            });
        } else {
            this.setState({
                errName: errName
            });
        }

    }

    render() {

        let { isLogin, userName, password, errName, errPassword } = this.state;


        if (isLogin) {

        }

        if (!isLogin) {
            return (
                < Grid >

                    <Grid.Row centered>
                        <h1>Log-in Page</h1>
                    </Grid.Row>
                    <Grid.Row centered>
                        <img src={login} className="logo" alt="logo" />

                    </Grid.Row>
                    <Grid.Row centered>
                        <Label htmlFor="user-name">User Name:</Label>
                        <Input type='text' name="user-name" placeholder='Enter User Name Here' defaultValue={this.state.userName} onChange={this.changeValue} />
                    </Grid.Row>

                    <Grid.Row centered>
                        <div><h5>{errName}</h5></div>
                    </Grid.Row>


                    <Grid.Row centered>
                        <Label htmlFor="password">Password:</Label>
                        <Input type='password' name="password" value={this.state.password} placeholder='Enter Password Here' onChange={this.changeValue1} />
                    </Grid.Row>
                    <Grid.Row centered>
                        <div><h5>{errPassword}</h5></div>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button content="Log-In" color='green' onClick={() => this.validate(userName, password, isLogin)} />

                    </Grid.Row>
                </Grid>
            );
        } else {

            return (

                <Grid>
                    <Grid.Row centered>
                        <h1>Welcome {userName}</h1>
                    </Grid.Row>

                    <Grid.Row centred>
                        <ProfileCard userName={userName} />

                    </Grid.Row>
                    <Grid.Row centered>
                        <Button content="Log Out" color='red' onClick={() => this.toggleButton(isLogin)} />

                    </Grid.Row>


                </Grid >

            );
        }

    }
}



