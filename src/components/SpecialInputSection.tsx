import * as React from 'react';
import { Grid, Input, Button, Label } from 'semantic-ui-react';
import { Fragment } from 'react';

export interface ISpecialInputSectionProps {
    // onClickUserNameSetButton: (input: string) => void;
    callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    isButtonPressed: boolean;
}

interface IState {
    userName: string;
}

export default class SpecialInputSection extends React.Component<ISpecialInputSectionProps, IState> {
    constructor(props: ISpecialInputSectionProps) {
        super(props);
        this.state = {
            userName: ""
        }
    }

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        this.setState({ userName: e.currentTarget.value })
    }

    public render() {
        const { callbackMethod, isButtonPressed, callbackMethodToGoBack //onClickUserNameSetButton 
        } = this.props;
        const { userName } = this.state;
        return (
            <Grid>
                {/* <Grid.Row centered>
                    <h1>Log-in Section</h1>
                </Grid.Row>
                <Grid.Row centered>
                    <Label htmlFor="user-name">User Name:</Label>
                    <Input type='text' placeholder='Enter User Name Here' onChange={this.onInputFieldChange} />
                </Grid.Row>
                <Grid.Row centered>
                    <Label htmlFor="password">Password:</Label>
                    <Input type='password' placeholder='Enter Password Here' onChange={this.onInputFieldChange} />
                </Grid.Row> */}
                <Grid.Row centered>

                    <Fragment>
                        {/* <Button content="Login" color="green" onClick={() => onClickUserNameSetButton(userName)} /> */}

                        {!isButtonPressed ?
                            <Button content="Log-In" color='green' onClick={callbackMethod} />
                            :
                            <Button content="Log Out" color='red' onClick={callbackMethodToGoBack} />
                        }
                    </Fragment>
                </Grid.Row>
            </Grid>
        );
    }
}