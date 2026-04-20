import { useForm } from 'react-hook-form';
import '../Pages/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const{register,handleSubmit} = useForm();
  let navigate = useNavigate();

  function onLogin(data) {

    if(data.email==="admin@gmail.com" && data.password==="1234") {
      alert("Login success..!");
      navigate("/admindashboard");
    }
    else {
      alert("Login failed...!!")
    }
    
  }

  return (
  <div className="container mt-4 mb-4">
  <div className="row justify-content-center">
    <div className="col-md-5">

      <h4 className="text-center mb-4">Login Form</h4>

      <form className="border p-4 rounded shadow-sm" onSubmit={handleSubmit(onLogin)}>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input  type="text" className="form-control" {...register("email")}
          value="admin@gmail.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password")}
          value="1234" />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3">Login</button> <br/><br/>
          Don't have account? <Link to="/register"> Sign Up</Link>
        </div>
      </form>
       
    </div>
  </div>
</div>
  )
}

export default Login