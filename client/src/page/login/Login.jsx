import "./login.css"
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (<>
 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col text-center">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label text-lg">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered text-lg" required ref={userRef} />
        </div>
        <div className="form-control">
          <label className="label text-lg">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered text-lg" required ref={passwordRef}/>
          <label className="label">
            <a href="#" className="label-text-alt text-sm link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-lg">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>



    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your Username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref ={passwordRef}/>
        <button className="loginButton" type ="submit" disabled={isFetching}>Login</button>
        </form>
    </div>
    </>
  );
}
