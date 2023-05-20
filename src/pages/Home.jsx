import React from "react";
import Layout from "./../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      {/* <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistan</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div> */}
    <div className="slider">
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.webalive.com.au/wp-content/uploads/2018/08/amazing-restaurant-websites.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://nextrestaurants.com/wp-content/uploads/2020/12/Restaurant-Website-Maintenance.png"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.bdtask.com/blog/uploads/Restaurant-Website-&-App.jpg"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
<div className="cards" style={{textAlign:"center"}}>
    <h1>Cards</h1>
    <CardGroup>
<Card>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhcm2Y0bkfuM_qqAZBVDge91Y25QGfagKqw&usqp=CAU" />
<Card.Body>
<Card.Title>Card title</Card.Title>
<Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This content is a little bit longer.
</Card.Text>
</Card.Body>
{/* <Card.Footer>
<small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
</Card>
<Card>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cHuUZr5gsKat_Bmq0XzpbBTaYHCayX78-w&usqp=CAU" />
<Card.Body>
<Card.Title>Card title</Card.Title>
<Card.Text>
This card has supporting text below as a natural lead-in to
additional content.{' '}
</Card.Text>
</Card.Body>
{/* <Card.Footer>
<small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
</Card>
<Card>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJWwghGRt08BZsL_PFSfYJty9fnYbVwRmhA&usqp=CAU" />
<Card.Body>
<Card.Title>Card title</Card.Title>
<Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This card has even longer content than the
first to show that equal height action.
</Card.Text>
</Card.Body>
{/* <Card.Footer>
<small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer> */}
</Card>
</CardGroup>
</div>
<link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"
                />
    </Layout>
    
  );
};

export default Home;
