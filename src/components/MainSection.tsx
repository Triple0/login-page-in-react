import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import FormSection from './FormSection';
import SpecialInputSection from './SpecialInputSection';

export interface IMainSectionProps {
    isButtonPressed: boolean;
    callbackMethod: () => void;
    callbackMethodToGoBack: () => void;
    userName: string;
    // onClickUserNameSetButton: (username: string) => void;
}

export default class MainSection extends React.Component<IMainSectionProps> {
    public render() {
        const {
            isButtonPressed,
            callbackMethod,
            callbackMethodToGoBack,
            userName } = this.props;

        let buttonPressHeader: JSX.Element;

        if (isButtonPressed) {
            buttonPressHeader = <h1>Welcome {userName}</h1>
        } else {
            buttonPressHeader = <h1></h1>
        }

        return (
            <Grid>
                <Grid.Row centered>
                    {buttonPressHeader}
                </Grid.Row>

                <Grid.Row centered>
                    {isButtonPressed ?
                        <ProfileCard userName={userName} />
                        :
                        <FormSection />
                    }
                </Grid.Row>

                <Grid.Row centered>
                    if({isButtonPressed}) {
                        <SpecialInputSection
                            callbackMethod={callbackMethod}
                            isButtonPressed={isButtonPressed}
                            callbackMethodToGoBack={callbackMethodToGoBack} />
                    }
                </Grid.Row>
            </Grid>
        );
    }
}