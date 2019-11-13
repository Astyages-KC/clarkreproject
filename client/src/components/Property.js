import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Property = (props) => {
    return(
        <div className="propertyBox">
            <div className="overlay-prop">
            <div className="property-list-styling">
            <p>Address: {props.streetAddress}, {props.city}, {props.state} {props.zipCode}</p>
            <p>For Sale or Rent: {props.forRentOrSale}</p>
            <p>Price: {props.price}</p>
            <p>Listed on: {moment(props.createdOn).format("MMMM Do YYYY")}</p>
            <p>Created by: {props.username}</p>
            {/* <p>image {props.imageUrl} </p> */}
            <img className="home-img" src={props.imageUrl} alt="logo" />
            {console.log(props)}
            </div>
            <div className="edit-del-style">
            <Link to={'/editform/' + props._id} className='edit-linkstyle'>Edit</Link>
            <Link to={'/editform/' + props._id} className='delete-linkstyle'>Delete</Link>
            </div>
            </div>
        </div>
    )
}

export default Property