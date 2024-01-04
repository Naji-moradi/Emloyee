import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddnewEmployee = () => {
  const initialFormState = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "male",
    phoneNumber: "",
    email: "",
    contactModes: [],
    maritalStatus: "single",
    immediateJoiner: "yes",
  };

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((mode) => mode !== value)
          : value,
    }));
  };

  const handleClear = (e) => {
    setFormData(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(
      addEmployee({
        id: newId,
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        contactModes: formData.contactModes,
        maritalStatus: formData.maritalStatus,
        immediateJoiner: formData.immediateJoiner,
      })
    );
    navigate("/");
    // Reset the form after submission
    setFormData(initialFormState);
    toast.success("Employee added successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container bg-light my-4  p-4 border rounded-3 ">
      <form onSubmit={handleSubmit} className=" ">
        <h2 className="mb-3 text-center">Employee Form</h2>
        <div className="text-center">
          <hr className="w-25 mx-auto pb-2" />
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control  border border-1 "
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="middleName" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            checked
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="maritalStatus" className="form-label">
            Marital Status
          </label>
          <select
            className="form-select"
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
          >
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="others"
                name="gender"
                value="others"
                checked={formData.gender === "others"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="others">
                Others
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Mode of Contact</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="emailMode"
                name="contactModes"
                value="email"
                checked={formData.contactModes.includes("email")}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="emailMode">
                Email
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="phoneMode"
                name="contactModes"
                value="phone"
                checked={formData.contactModes.includes("phone")}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="phoneMode">
                Phone
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Immediate Joiner</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="yes"
                name="immediateJoiner"
                value="yes"
                checked={formData.immediateJoiner === "yes"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="no"
                name="immediateJoiner"
                value="no"
                checked={formData.immediateJoiner === "no"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-start gap-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-primary"
          >
            Clean form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddnewEmployee;
