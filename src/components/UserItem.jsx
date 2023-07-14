const UserItem = ({users}) => {
    const handleClick = (e) => {
        console.log(e.currentTarget.id)
    }

    return (
        <div className='container' onClick={handleClick} id={users.id}>
        <h1>{users.name}</h1>
        <p>{users.email}</p>
        </div>
    )
}

export default UserItem