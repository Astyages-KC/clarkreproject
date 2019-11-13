import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import Property from "./Property.js";
import { Link } from "react-router-dom";

function AgentPage() {
  const { getUserPosts, posts, userPosts } = useContext(UserContext);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (firstLoad) {
      getUserPosts();
      setFirstLoad(false);
    }
  }, [getUserPosts, posts, firstLoad]);

  return (
    <div className="agentPageStyle">
      <Link to="/propertyform" className="add-linkstyle">
        Add a new property for rent or sale
      </Link>
      <h1 className="agentpageTop">Your property list</h1>
      <div className="agentpageList">
        {userPosts.map((post, index) => (
          <Property key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default AgentPage;
