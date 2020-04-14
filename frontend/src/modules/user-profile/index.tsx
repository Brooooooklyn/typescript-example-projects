import React from 'react'
import { Table } from '~/components'

export interface UserProfileProps {
  userSlug: string
  userName: string
  friends: string[]
}

export const UserProfile = React.memo<UserProfileProps>((props) => {
  const { userSlug, userName, friends } = props
  return (
    <div>
      <p>
        <span>{userSlug}</span> {userName}
      </p>
      <Table items={friends} />
    </div>
  )
})
