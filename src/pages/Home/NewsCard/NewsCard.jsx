import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
// import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    // console.log(news);
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} className='' src={author.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author.published_date).format("YYYY-MM-DD")}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} alt="" />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}<Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-bold'> ...Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        readOnly
                        orientation="horizontal"
                        value={rating?.number}
                    />
                    {/* <Rating
                        className='text-warning'
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    /> */}
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye />  {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;