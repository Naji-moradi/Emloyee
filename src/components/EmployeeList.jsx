import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../redux/userReducer";
import { confirmAlert } from "react-confirm-alert";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const UsersLists = () => {
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
  console.log("users", users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this employee?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteEmployee({ id })),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
      overlay: {
        background: "rgba(112, 109, 109, 0.8)", // Customize the overlay color and opacity
      },
    });
  };
  return (
    <div className="container border border-2 mt-3 ">
      <Link to="/create" className="btn btn-primary btn-md my-3">
        create+
      </Link>
      <div className="table-responsive table-bordered">
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th className="fs-6">Name</th>
              <th className="fs-6">Email</th>
              <th className="fs-6">Join Early?</th>
              <th className="fs-6">Gender</th>
              <th className="fs-6">Status</th>
              {/* <th className="fs-6">earlyJoin?</th> */}
              <th className="fs-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {/* <td>{user.id}</td> */}
                <td className="fs-6">{`${user.firstName} ${user.lastName}`}</td>
                <td className="fs-6">{user.email}</td>
                <td className="fs-6">{user.immediateJoiner}</td>
                <td className="fs-6">{user.gender}</td>
                <td className="fs-6">{user.maritalStatus}</td>
                {/* <td className="fs-6">{user.immediateJoiner}</td> */}
                <td className="fs-6 ">
                  <Link
                    to={`/update/${user.id}`}
                    className="btn btn-sm btn-primary m-1 "
                  >
                    <FaRegEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger m-1 "
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersLists;
