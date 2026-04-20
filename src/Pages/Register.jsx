import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Register() { 
  
  const {register,handleSubmit,reset} = useForm();
  let navigate = useNavigate();

  function onRegister(data) {
    alert("Form sumbitted...!!");
    console.log(data);
    // axios.post('http://localhost:3000/students',data)
    axios.post('http://localhost:9090/add',data)
    .catch((error)=> console.log(error))
    navigate("/login");
  }

  return (
   <div className="container mt-3 mb-3">
  <div className="row justify-content-center">
    <div className="col-md-10">

      <h4 className="text-center mb-3">Registration Form</h4>

      <form onSubmit={handleSubmit(onRegister)} className="border p-3 rounded shadow-sm">

        {/* Name + Email */}
        <fieldset className="form-control">
          <legend>Personal Details</legend>
        <div className="row mb-2">
          <div className="col-md-6">
            {/* <label className="form-label">Name</label> */}
            <input type="text" className="form-control" {...register("sname")} placeholder="Name"/>
          </div>

          <div className="col-md-6">
            {/* <label className="form-label">Email</label> */}
            <input type="email" className="form-control" {...register("email")} placeholder="Email"/>
          </div>
        </div>

        {/* Username + Email */}
        <div className="row mb-2">
          <div className="col-md-6">
            {/* <label className="form-label">Password</label> */}
            <input type="password" className="form-control" {...register("password")} placeholder="Password" />
          </div>

          <div className="col-md-6">
            {/* <label className="form-label">D.O.B</label> */}
            <input type="date" className="form-control" {...register("dob")} placeholder="D.O.B"/>
          </div>
        </div>

        {/* Contact + Batch + Fees */}
        <div className="row mb-2">
          <div className="col-md-4">
            {/* <label className="form-label">Contact</label> */}
            <input type="number" className="form-control" {...register("contact")} placeholder="Contact"/>
          </div>

          <div className="col-md-4">
            {/* <label className="form-label">Batch</label> */}
            <select className="form-select" {...register("batch")}>
              <option>Select Batch</option>
              <option>B101</option>
              <option>B102</option>
              <option>B103</option>
              <option>B104</option>
              <option>B105</option>
            </select>
          </div>

          <div className="col-md-4">
               {/* <label className="form-label">Fees</label> */}
              <input type="number" className="form-control" {...register("fees")} placeholder="Fees"/>
          </div>
        </div>

        {/* Gender + Courses */}
        <div className="row mb-2">

          <div className="col-md-4">
            <label className="form-label d-block">Gender</label>

            <div className="form-check form-check-inline">
              <input type="radio" value="male" className="form-check-input" {...register("gender")} />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" value="female" className="form-check-input" {...register("gender")} />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label d-block">Courses</label>

            <div className="form-check form-check-inline">
              <input type="checkbox" value="java" className="form-check-input" {...register("courses")} />
              <label className="form-check-label">Java</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="checkbox" value="spring" className="form-check-input" {...register("courses")} />
              <label className="form-check-label">Spring</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="checkbox" value="react" className="form-check-input" {...register("courses")} />
              <label className="form-check-label">React</label>
            </div>
          </div>
        </div>
        </fieldset> <br/>
        

        {/* Address */}
        <fieldset className="form-control">
          <legend>Address Details</legend>
        <div className="row mb-2">

          <div className="col-md-4">
            {/* <label className="form-label">Pincode</label> */}
            <input type="number" className="form-control" {...register("address.pincode")} placeholder="Pincode"/>
          </div>

          <div className="col-md-4">
            {/* <label className="form-label">Area</label> */}
            <input type="text" className="form-control" {...register("address.area")} placeholder="Area"/>
          </div>

          <div className="col-md-4">
            {/* <label className="form-label">City</label> */}
            <input type="text" className="form-control" {...register("address.city")} placeholder="city"/>
          </div>
        </div> 
        </fieldset>  <br/>

        {/* Buttons */}
        <div className="text-center mt-2">
          <button type="submit" className="btn btn-primary me-2 mb-3 mt-2">
            Submit
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => reset()}
          >
            Reset
          </button> <br/><br/>

          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register