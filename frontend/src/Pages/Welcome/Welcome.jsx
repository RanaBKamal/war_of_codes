import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Welcome.css";


const Welcome = () => {

  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Assistant&family=Philosopher&display=swap');
  </style>;

    const backgroundImageUrl =
      "https://images.pexels.com/photos/6238352/pexels-photo-6238352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
      <Fragment>
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="hero-text">
            <Container>
              <Row>
                <Col>
                  <h1 className="font-head">Welcome to the QuizShotz... Kamal</h1>
                  <p className="font-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ac orci quis tortor euismod tincidunt et vel orci.
                  </p>
                  <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
}

export default  Welcome