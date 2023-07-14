import UserItem from './UserItem'

const Users = ({users}) => {

    return users.map((users) => (
        <UserItem users={users} key={users.id} />
    ))
}

export default Users