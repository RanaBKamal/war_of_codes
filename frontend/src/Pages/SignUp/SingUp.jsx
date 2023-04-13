import { Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SingUp.css";
import "../../App/App.css";

const SingUp = () => {
//   const [user, setUser] = useState({
//     email: "",
//     username: "",
//     password: "",
//     address: "",
//     phone: "",
//     postalcode: "",
//     role: ["user"],
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_SIGNUP_API,
//         user
//       )
//       .then(function (response) {
//         toast.success("Successfully registered");
//       })
//       .catch(function (error) {
//         console.log(error);
//         toast.error("Failed to Registered");
//       });
//   };

  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="signup-page">
          <Col className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center d-none-card">
            <div className="login-card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg"
                alt="login-img"
                className="login-banner-img image-relative"
              />
              <section className="text-center login-text">
                <small>Welcome to the Quizshotz</small>
                <h1>QUIZSHOT</h1>
                <small></small>
              </section>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center">
            <Form className="py-3 px-5">
              <p className="fs-2 fw-bold">
                <span className="login-rect">. </span> Sign Up
              </p>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value=""
                    onChange=""
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value=""
                    onChange=""
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPostalCode">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="Jhon"
                    name="FName"
                    value=""
                    onChange=""
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Doe"
                    name="LName"
                    value=""
                    onChange=""
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPostalCode">
                  <Form.Label>Choice</Form.Label>
                  <Form.Select>
                    <option>Default Music</option>
                    <option>Sports</option>
                    <option>Programming</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder="Phone"
                    name="phone"
                    value=""
                    onChange=""
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value=""
                    onChange=""
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Agree our terms and conditions"
                />
              </Form.Group>

              <Button
                className="btn btn-lg bg-orange w-100"
                type="submit"
                onClick=""
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Fragment>
  );
};

export default SingUp;