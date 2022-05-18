import React, {useState} from "react";
import Form from "@rjsf/core";
import "./style.css";
import DatePicker from "react-datepicker";


const schema = {
  type: "object",
  properties: {
    country: {
      type: "string",
      title: "State",
      enum: ["Tamil Nadu", "Andhra Pradesh", "Telangana"]
    }
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: {
              enum: ["Tamil Nadu"]
            },
            province: {
              type: "string",
              title: "City",
              enum: ["Chennai", "Thanjavur", "Trichy", "Cuddalore", "Madurai"]
            }
          }
        },
        {
          properties: {
            country: {
              enum: ["Andhra Pradesh"]
            },
            province: {
              type: "string",
              title: "City",
              enum: ["Chittor", "Kadappah", "Ananthapur","Tirupati","Krishna"]
            }
          }
        },
        {
          properties: {
            country: {
              enum: ["Telangana"]
            },
            province: {
              type: "string",
              title: "City",
              enum: ["Warangal", "Nalgonda", "Adilabad","Hyderabad","Karimnagar"]
            }
          }
        }
      ]
    }
  }
};


export default function RegistrationForm() {

  

const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="form">
      <div className="form-body">
    <div className="username">
      <label className="form__label" for="firstName">Patient First Name </label>
      <input className="form__input" type="text" id="firstName" placeholder="First Name" />
    </div>
    <div className="lastname">
        <label className="form__label" for="lastName">Patient Last Name </label>
        <input type="text" name="" id="lastName" className="form__input" placeholder="Last Name" />
      </div><div className="address">
        <label className="form__label" for="address">Address </label>
        <input type="address" id="address" className="form__input" placeholder="Address" />
      </div><div className="phone-number">
        <label className="form__label" for="phoneNumber">Phone Number </label>
        <input className="form__input" type="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
      </div><div className="email">
        <label className="form__label" for="email">Email Id </label>
        <input className="form__input" type="email" id="email" placeholder="Email Id" />
      </div>
      <div className="username">
      <label className="form__label" for="pinCode">Pin Code</label>
      <input className="form__input" type="text" id="pinCode" placeholder="Pin Code" />
    </div>
    <div>
    <label className="form__label" for="DateofBirth">Date Of Birth</label>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
      <div className="state">
        <Form className="form_state" schema={schema} placeholder="Select a state" />
      </div>
      </div>
      </div>
  );
}







