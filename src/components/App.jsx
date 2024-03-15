import { useEffect, useState } from "react";
import UserData from './UserData';

const API = "https://coderbyte.com/api/challenges/json/age-counting";

const App = () => {
    const [users, setUsers] = useState([]);
    const [varOcg, setVarOcg] = useState(0); // Variable named varOcg

    const fetchUsers = async (url) => {
        try {
           
            console.log("jkfhfk");
            const res = await fetch(url,{
                method:"GET",
                
            });
            const data = await res.json();
            console.log("Data",data);
            // if (data.length > 0) {
            //     setUsers(data);

            //     // Count the number of users with age greater than or equal to 50
            //     const count = data.filter(user => user.age >= 50).length;
            //     setVarOcg(count);
            // }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, []);


    return (
        <>
        <table>
             <thead>
                    <tr>
                        <th>ID</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData users={users} />
                </tbody>
            </table>
            <p>Number of users with age greater than or equal to 50: {varOcg}</p>
        </>
    );
}

// __define-ocg__

export default App;