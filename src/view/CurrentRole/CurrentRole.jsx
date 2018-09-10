import React from 'react'
import { getRole } from 'utils/role'

export default () => (
    <h2>Your current role is: {getRole()}</h2>
)