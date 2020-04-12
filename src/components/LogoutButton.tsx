import * as React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Fragment } from 'react';

export interface ILogoutButtonProps {
    // onClickUserNameSetButton: (input: string) => void;
    // callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    isButtonPressed: boolean;
}

interface IState {
    userName: string;
}

export default class LogoutButton extends React.Component<ILogoutButtonProps, IState> {
    constructor(props: ILogoutButtonProps) {
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
        const { isButtonPressed, callbackMethodToGoBack //onClickUserNameSetButton 
        } = this.props;
        const { userName } = this.state;
        return (
            <Grid>
                <Grid.Row centered>

                    <Fragment>
                        {<Button content="Log Out" color='red' onClick={callbackMethodToGoBack} isButtonPressed = {isButtonPressed} />}
                      
                    </Fragment>
                </Grid.Row>
            </Grid>
        );
    }
}