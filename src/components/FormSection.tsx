import * as React from 'react';
import { Grid, Input, Label } from 'semantic-ui-react';
//import { Fragment } from 'react';

export interface IFormSectionProps {
    // onClickUserNameSetButton: (input: string) => void;
    callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    isButtonPressed: boolean;
}

interface IState {
    userName: string;
}

export default class FormSection extends React.Component { 
   

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        this.setState({ userName: e.currentTarget.value })
    }

    public render() {
        
        return (
            <Grid>
                <Grid.Row centered>
                    <h1>Log-in Page</h1>
                </Grid.Row>
                <Grid.Row centered>
                    <Label htmlFor="user-name">User Name:</Label>
                    <Input type='text' placeholder='Enter User Name Here' />
                </Grid.Row>
                <Grid.Row centered>
                    <Label htmlFor="password">Password:</Label>
                    <Input type='password' placeholder='Enter Password Here'  />
                </Grid.Row>
            
             
            </Grid>
        );
    }
}