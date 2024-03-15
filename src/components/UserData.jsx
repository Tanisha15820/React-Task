const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id} = curUser;
                    const {age} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{age}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;