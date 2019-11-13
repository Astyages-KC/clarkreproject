import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";

const initState = {
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  price: "",
  forRentOrSale: "",
  imageUrl: ""
};

function PropertyForm() {
  const { handleNewPost } = useContext(UserContext);

  const [inputs, setInputs] = useState(initState);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log('name:', name, 'value', value)
    setInputs(prevInputs => {
      return {
      ...prevInputs,
      [name]: value
      };
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNewPost(inputs);
    setInputs(initState)
  };

  //Returning the Add form
  // and the list of editable/deletable listings
  return (
    <div className="property-add-box">
      <p className='makeDisWorkRN'>Property Form</p>
      <form onSubmit={handleSubmit} className="property-add-form">
        Street Address:
        <input
          type="text"
          name="streetAddress"
          className="propertyForm"
          value={inputs.streetAddress}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        City:
        <input
          type="text"
          name="city"
          className="propertyForm"
          value={inputs.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        State:
        <input
          type="text"
          name="state"
          className="propertyForm"
          value={inputs.state}
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        Zip Code:
        <input
          type="number"
          name="zipCode"
          className="propertyForm"
          value={inputs.zipCode}
          onChange={handleChange}
          placeholder="Zipcode"
        />
        <br />
        Price:
        <br />
        <input
          type="number"
          name="price"
          className="propertyForm"
          value={inputs.price}
          onChange={handleChange}
          placeholder="Price"
          /><br />
          Is the property;<br/> for Rent?
        <input
          type="radio"
          name="forRentOrSale"
          className="propertyFormradio"
          value={'rent'}
          onChange={handleChange}
          placeholder="Rent"
        /><br />
        or Sale?
        <input
          type="radio"
          name="forRentOrSale"
          className="propertyFormradio"
          value={'sale'}
          onChange={handleChange}
          placeholder="Sale"
        />
        <br />
        Image link:
        <input
          type="text"
          name="imageUrl"
          className="propertyForm"
          value={inputs.imageUrl}
          placeholder="Image Link"
          onChange={handleChange}
          /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PropertyForm;
