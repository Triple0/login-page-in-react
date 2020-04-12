import * as React from 'react';
import { IMenuItem } from '../models/menuItem';
import { Menu } from 'semantic-ui-react';

export interface INavBarProps {
    appName: string;
    isUserLoggedIn: boolean;
    menuOptions: IMenuItem[];
}

export default class NavBar extends React.Component<INavBarProps> {
    public render() {
        let {  menuOptions } = this.props;

        // state = { activeItem: 'home' }
  
        // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
      
        // render() {
        //   const { activeItem } = this.state

        // return (
        //     <React.Fragment>
        //         <Menu items={menuOptions} />
        //     </React.Fragment>
        // );

        return (
            <React.Fragment>
                 <Menu items={menuOptions} />
             </React.Fragment>
             

        );
    }
}


// export default class MenuExampleSecondaryPointing extends Component {
//     state = { activeItem: 'home' }
  
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
//     render() {
//       const { activeItem } = this.state
  
//       return (
//         <div>
//           <Menu pointing secondary>
//             <Menu.Item
//               name='home'
//               active={activeItem === 'home'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name='messages'
//               active={activeItem === 'messages'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name='friends'
//               active={activeItem === 'friends'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Menu position='right'>
//               <Menu.Item
//                 name='logout'
//                 active={activeItem === 'logout'}
//                 onClick={this.handleItemClick}
//               />
//             </Menu.Menu>
//           </Menu>
  
//           <Segment>
//             <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//           </Segment>
//         </div>
//       )
//     }
//   }