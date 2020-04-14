
//  resources: https://flaviocopes.com/react-forms/ 

import * as React from 'react';
import '../styles/App.css';
import { IMenuItem } from '../models/menuItem';
import NavBar from './Navbar';
import { SignInForm } from './SignInForm'
import Login from './Login';
import { Grid } from 'semantic-ui-react';

export interface IAppProps {
}

interface IState {
  menuItems: IMenuItem[];
  isLogin: boolean;
  userName: string;
  password: string;

}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      menuItems: [
        {
          key: "home",
          name: "Home"
        },
        {
          key: "messages",
          name: "Messages"
        },
        {
          key: "friends",
          name: "Friends"
        },
        {
          key: "contacts",
          name: "Contacts"
        },
        {
          key: "login",
          name: "login"
        }
      ],
      isLogin: false,
      userName: "",
      password: ""
    }
  }

  public toggleButton = (isLogin: boolean): void => {
    this.setState({ isLogin: false })
  }

  toggleButtonBack = () => {
    this.setState({ isLogin: false })
  };

  public render() {
    let { menuItems, isLogin, userName, password } = this.state;
    return (

      <div className="App">
        < Grid >
          <Grid.Row centered>
            <NavBar
              appName="Sample App"
              isUserLoggedIn={false}
              menuOptions={menuItems} />
          </Grid.Row>
          <Grid.Row centered>
            <Login />
          </Grid.Row>
          <Grid.Row centered>

            <SignInForm userName={userName}
              password={password}
              isLogin={isLogin}
              toggleButton={this.toggleButton} />

          </Grid.Row>
          <Grid.Row centered>

          </Grid.Row>
        </Grid>
      </div>

    );
  }
}