import React, { useState } from "react";
import "./form.css";
import { formImg, thankyouPic } from "../../export";
import { Link } from "react-router-dom";

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = () => {
    setFormSubmit(true);
  };

  return (
    <div className="formPage">
      <div className="formImage">
        <img src={formImg} alt="" />
      </div>
      {formSubmit ? (
        <div className="submittedForm">
          <img src={thankyouPic} alt="" />
          <div className="formline"></div>
          <h1>Thank you!</h1>
          <p>your application has been submitted successfully</p>
        </div>
      ) : (
        <div className="formContent">
          <h3>GOT AN IDEA?</h3>
          <h1>Drop Us A Message</h1>

          <form className="formData">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              className="nameField"
              placeholder="Enter your Name"
              id="nameField"
              name="nameField"
            />

            <label htmlFor="organisationField">Organisation Name</label>
            <input
              type="text"
              className="organisationField"
              placeholder="Enter your Organisation Name"
              id="organisationField"
              name="organisationField"
            />

            <label htmlFor="emailField">Email ID</label>
            <input
              type="email"
              className="emailField"
              placeholder="Enter your Email ID"
              id="emailField"
              name="emailField"
            />

            <label htmlFor="contactField">Contact Number</label>
            <input
              type="tel"
              className="contactField"
              placeholder="Enter your Contact Number"
              id="contactField"
              name="contactField"
            />

            <label htmlFor="genderField">You are</label>
            <select name="genderField" id="genderField" className="genderField">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>

            <label htmlFor="websiteField">Website</label>
            <input
              type="url"
              className="websiteField"
              placeholder="Enter your Website URL"
              id="websiteField"
              name="websiteField"
            />

            <label htmlFor="servicesField">Services</label>
            <select
              className="servicesField"
              id="servicesField"
              name="servicesField"
            >
              <option value="Social Media Handling">
                Social Media Handling
              </option>
              <option value="PR Gifting and Branding">
                PR Gifting and Branding
              </option>
              <option value="Influencer Campaign">Influencer Campaign</option>
              <option value="Influencer Management">
                Influencer Management
              </option>
              <option value="Reviews and Ratings">Reviews and Ratings</option>
              <option value="Celeb Endorsement and Production shoot">
                Celeb Endorsement and Production shoot
              </option>
              <option value="Events and Launches">Events and Launches</option>
              <option value="Content Amplification">
                Content Amplification
              </option>
              <option value="Campaign Strategy">Campaign Strategy</option>
            </select>

            <label htmlFor="budgetField">Budget</label>
            <input
              type="number"
              className="budgetField"
              placeholder="Enter your Budget"
              id="budgetField"
              name="budgetField"
            />

            <label htmlFor="messageField" className="messageLabel">
              Message
            </label>
            <textarea
              className="messageField"
              placeholder="What's on your Mind?"
              id="messageField"
              name="messageField"
              style={{ height: "9rem" }}
            />

            <div className="formButtons">
              <Link to="/" className="formLinks">
                <button className="formBack">Back</button>
              </Link>

              <button className="formSubmit" onClick={() => handleSubmit()}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
