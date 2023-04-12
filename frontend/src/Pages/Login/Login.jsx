import {useState} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const[user, setUser]= useState({
        username: '',
        password: ''
    });

    // const [usernameError, setUsernameError]= useState(null);

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
    };

    // const validateUsername = (username) => {
    //     const regex = /^[a-zA-Z0-9_-]{3,16}$/;
    //     return regex.test(username);
    //   }

    const handleLogin=(e)=>{
        e.preventDefault();
        // if (!validateUsername(user.username)) {
        //   setUsernameError("Please enter a valid username.");
        // } else {
        //   setUsernameError(null);
        // }
        axios.post("http://localhost:8080/api/auth/signin", user)
        .then(function(response){
            console.log(response.data);
            toast.success("Successfully loggedin");
            localStorage.setItem("loggedin_user", JSON.stringify(response.data));
            window.location.reload(false);
        })
        .catch(function(error){
            console.log(error.message)
            toast.error("Failed to login");
        });
    }

    return (
        <Container fluid>
            <Header/>
            <Row className='login-page '>
                    <Col className='col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center d-none-card'>
                        <div className='login-card'>
                            <img src='https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg' alt='login-img' className='login-banner-img image-relative' />
                            <section className=' login-text'>
                                <h1>War Of Codes</h1>
                                <h3>Our team members:</h3>
                                <ul>
                                    <li>Rohit Dhimal</li>
                                    <li>Kamal Bahadur Rana</li>
                                    <li>Chiranjibi Karki</li>
                                </ul>
                            </section>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                            <Form className=' py-5 px-5'>
                                <p className='fs-2 fw-bold'> <span className='login-rect'>. </span> Login Form</p>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" 
                                    name="username" value={user.username} onChange={handleChange}
                                    />
                                     {/* {usernameError && <p style={{fontStyle:"italic",color:"red"}}>{usernameError}</p>} */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" 
                                    value={user.password} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Button className='btn btn-lg bg-orange w-100' type="submit" 
                                onClick={handleLogin}
                                >
                                    Submit
                                </Button>
                            </Form>
                        {/* {
                            Object.keys(loggedInUser).length !== 0 &&
                            <h4 className='text-center mt-5'>
                                You are logged in!
                            </h4>
                        } */}
                    </Col>
                </Row>
            <Footer/>
        </Container>
    )
}

export default  Login