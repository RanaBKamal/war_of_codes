import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react"

import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { Container } from "react-bootstrap"

const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let config = {
            headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzczN2VjNjdlYmE5NTk1YzBmNmFmYSIsImlhdCI6MTY4MTM0MDU2NSwiZXhwIjoxNjgxNDI2OTY1fQ.eO9KYjQK18OuamHW3doVx8seDMGtqX1XeMfuLY9CowI'
            }
        }
        axios.get('http://localhost:8080/api/admin/get_all_users', config).then(function(response){
            setUsers(response.data);
            console.log(response.data);
        }).catch(function(error){
            toast.error("Failed loading users");
        });
    },[]);
    const usersElement = users.map((item) => <tr>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.choice}</td>
    </tr>);
    return (
        <Container fluid>
            <Header/>
                <Container>
                    <table className='table table-stripped'>
                        <thead>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Latname</th>
                            <th>Choice</th>
                        </thead>
                        <tbody>
                            {usersElement}
                        </tbody>
                    </table>
                </Container>
            <Footer/>
        </Container>
    )
}

export default  Admin