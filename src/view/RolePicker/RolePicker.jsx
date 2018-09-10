import React from 'react'
import { setRole } from 'utils/role'

export default class RolePicker extends React.Component {

    setRole = (role) => {
        setRole(role)
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                <h1>Role Picker</h1>
                <button onClick={() => this.setRole('user')}>User</button>
                <button onClick={() => this.setRole('admin')}>Admin</button>
            </React.Fragment>
        )
    }
}