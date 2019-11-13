import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function ForRent() {
  //   const { posts } = useContext(UserContext);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    axios
      .get("/public/rent")
      .then(res => {
          setPosts(res.data)         
      })
      .catch(err => console.log(err.data));
  }, []);

  const mappedposts = posts.map((post, index) => (
    <div key={index} className="propertyBox">
      <div className="overlay-prop">
      <div className="property-list-styling">
      <p>
        Address: {post.streetAddress}, {post.city}, {post.state} {post.zipCode}
      </p>
      <p>For Sale or Rent: {post.forRentOrSale}</p>
      <p>Price: {post.price}</p>
      <p>Listed on: {moment(post.createdOn).format("MMMM Do YYYY")}</p>
      <p>Created by: {post.username}</p>
      <img className="home-img" src={post.imageUrl} alt="logo" />
      </div>
      </div>
    </div>
  ));
  return <div>
    <h1 className="rent-sale-titles">Properties for Rent</h1> 
  {mappedposts}
  </div>;
}

export default ForRent;
