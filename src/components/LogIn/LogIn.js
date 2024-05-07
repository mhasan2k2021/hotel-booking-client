import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { userLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-50 mx-auto mt-5 mb-5">
      <h1 className="mb-5 text-decoration-underline">Sign In</h1>
      <form onSubmit={handleLogIn}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
