import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function AdminDashboard() {

  const [students, setStudents] = useState([]);
  let navigate = useNavigate();

  function getAllData() {
    // axios.get("http://localhost:3000/students")
    axios.get("http://localhost:9090/getAll")
    .then((res) => setStudents(res.data))
    .catch((error) => console.log(error))
  }

  useEffect(()=>{
    getAllData()
  }, []);

  function onDelete(id) {
    if(confirm("Do you want to delete data? " +id)) {
      axios.delete("http://localhost:3000/students/"+id)
      .catch((error)=> console.log(error))
      navigate("/login")
    }
  }

  function onEdit(id) {
    if(confirm("Do you want to edit data? " +id)) {
      navigate("/update/"+id)
    }
  }

  return (
<div className="container mt-4 mb-5">

  {/* Dashboard Header */}
  <div className="row mb-2">
    <div className="col">
      <h2 className="fw-bold text-primary">Admin Dashboard</h2>
    </div>
  </div>


  {/* Table Section */}
  <div className="row">
    <div className="col">

      <div className="card shadow-sm">

        {/* Card Header */}
        <div className="card-header bg-dark text-white">
         
        </div>

        {/* Table */}
        <div className="card-body p-0">
          <div className="table-responsive">

            <table className="table table-hover table-striped mb-0">

              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>D.O.B</th>
                  <th>Contact</th>
                  <th>Batch</th>
                  <th>Courses</th>
                  <th>Fees</th>
                  <th>Pincode</th>
                  <th>Area</th>
                  <th>City</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  students.map((st, i) => (
                    <tr key={st.id}>
                      <td>{st.id}</td>
                      <td>{st.sname}</td>
                      <td>{st.email}</td>
                      <td>{st.dob}</td>
                      <td>{st.contact}</td>
                      <td>{st.batch}</td>
                      <td>{st.courses.join(", ")}</td>
                      <td>{st.fees}</td>
                      <td>{st.address.pincode}</td>
                      <td>{st.address.area}</td>
                      <td>{st.address.city}</td>
                      <th><button className="btn btn-warning" onClick={()=>onDelete(st.id)}>DELETE</button></th>
                      <th><button className="btn btn-info" onClick={()=>onEdit(st.id)}>EDIT</button></th>
                    </tr>
                  ))
                }
              </tbody>

            </table>

          </div>
        </div>

      </div>

    </div>
  </div>

</div>
  )
}

export default AdminDashboard