import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatEmployee } from "../redux/userReducer";
import { toast } from "react-toastify";

const Update1 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    // Fetch the employee data by ID and set it to formData
    const employee = users.find((user) => user.id == id);
    if (employee) {
      setFormData(employee);
    }
  }, [id, users]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatEmployee({ id: parseInt(id), ...formData }));
    navigate("/");
    setFormData(initialFormState);
    toast.success("Employee updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container bg-light my-4  p-4 border rounded-3">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-3 text-start">Update details</h2>
        <div className="text-start">
          <hr className="w-25  pb-2" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
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
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
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
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
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

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select
            className="form-control"
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

        <div className="row my-3">
          <div className="col-md-4">
            <div className="form-group">
              <label>Gender</label>
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
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Mode of Contact</label>
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
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Immediate Joiner</label>
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
        </div>

        <div className="d-lfex ">
          <button type="submit" className="btn btn-primary">
            Update
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Update1;
