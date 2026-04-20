import { Link } from 'react-router-dom';
import img from '../assets/logo_transparent.png'

function Header() {

  return (
    // <div>Header</div>
    <div>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <img src={img} height={70} width={70}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="courses">Courses</Link>
        </li>
      </ul>
        <Link className="btn btn-outline-primary me-2" to="login">Login</Link>
        <Link className="btn btn-outline-success" to="register">Register</Link> 
    </div>
  </div>
</nav>
</div>
  )
}

export default Header;
