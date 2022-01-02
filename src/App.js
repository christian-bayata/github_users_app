import React, {useState, useEffect} from 'react';

const url = `https://api.github.com/users`;

const GithubUsers = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);
   
    return (
    <>
        <div className="container">
            
            <h1 className="intro">Github Users</h1>

            <ul>
                {users.map(user => {
                const {id, login, avatar_url, html_url} = user
                return ( 
                    <li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <div className="py-4 px-3">
                            <h4 id="font">{login}</h4>
                            <a href={html_url}></a>
                        </div>
                    </li>    
                    )
                })} 
            </ul>
        </div>
    </>
    )    
};

export default GithubUsers