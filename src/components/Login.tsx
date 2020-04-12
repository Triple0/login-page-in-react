import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const Login = () => (
    <Modal trigger={<Button>Login</Button>} basic size='small'>
        <Modal.Content>
            <form>
                <h3>Login Page</h3>
                <label htmlFor="user-name">User Name:</label>
                {<input type="text" name="user-name" /*value={this.state.firstName} onChange={this.updatePersonInfo} */ />}
                <label htmlFor="password">Password:</label>
                {<input type="password" name="password" /*value={this.state.lastName} onChange={this.updatePersonInfo}*/ /> }
                
            </form>
        </Modal.Content>
        <Modal.Actions>
            
            <Button color='green' inverted>
                <Icon name='checkmark' /> Login
      </Button>

      <Button basic color='red' inverted>
                <Icon name='remove' /> Cancel
      </Button>
        </Modal.Actions>
    </Modal>
)

export default Login
