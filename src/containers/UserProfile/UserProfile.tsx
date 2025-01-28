import React from 'react'
import { Avatar } from './styles'

const UserProfile: React.FC = () => {
  return (
    <div>
      <Avatar
        src="https://github.com/webdesigner279.png"
        alt="Avatar do usuário"
      />
      <h3>Valter Vieira</h3>
    </div>
  )
}

export default UserProfile
