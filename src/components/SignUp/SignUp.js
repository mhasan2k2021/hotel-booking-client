import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userRegister } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password);

    if (password !== confirm) {
      setError("Password doesn't match.");
      return;
    }

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-50 mx-auto mt-5 mb-5">
      <h1 className="mb-5 text-decoration-underline">Sign Up</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label className="mb-2">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="mb-2">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="mb-2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </div>
        <p>
          <small className="text-danger">{error}</small>
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
