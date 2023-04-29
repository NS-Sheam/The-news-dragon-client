import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./LeftNav.css";
import { Card, Col, Row } from 'react-bootstrap';
import first from "../../../assets/1.png"
import second from "../../../assets/2.png"
import third from "../../../assets/3.png"
import ActiveCategory from '../ActiveCategory/ActiveCategory';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://the-news-dragon-server-ns-sheam.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <div className=''>
                <h4>All Catagory </h4>
                <div className='ps-4'>
                    {
                        categories.map(category => <p
                            key={category.id}
                            className='category'
                        >
                            <ActiveCategory
                                to={`/category/${category.id}`}
                                className=''
                            >{category.name}</ActiveCategory>
                        </p>)
                    }
                </div>
            </div>
            <Row xs={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default LeftNav;