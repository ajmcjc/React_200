import '../Components/Foofter.css'
import img from '../assets/logo.jpg'

function Footer() {

    return (
    <div className="bg-dark" style={{width:"100%"}}>
    <div className="container" style={{paddingTop:"30px"}}>
    <div className="row">
    <div className="col-lg-8 col-sm-12 mb-2">
    <div className="row">
    <div className="col-lg-4 col-sm-6 mb-2">
    <h5 className="text-light">Our Courses</h5> 
    <div className="mt-2">
    <ul className="list-unstyled footerLinks mb-0">
    <li><a className='flink' href="java-j2ee.php"><i className="fas fa-chevron-right"></i> Java|J2EE</a></li>
    <li><a className='flink' href="spring.php"><i className="fas fa-chevron-right"></i> Spring</a></li>
    <li><a className='flink' href="webservice-microservice.php"><i className="fas fa-chevron-right"></i> Webservice &amp; Microservice</a></li>
    <li><a className='flink' href="python.php"><i className="fas fa-chevron-right"></i> Python</a></li>
    <li><a className='flink' href="selenium-api-testing.php"><i className="fas fa-chevron-right"></i> Selenium &amp; Testing</a></li>
    <li><a className='flink' href="cloud-computing.php"><i className="fas fa-chevron-right"></i> Cloud Computing</a></li>
    <li><a className='flink' href="angular.php"><i className="fas fa-chevron-right"></i> Angular</a></li>

    <li><a className='flink' href="power-bi.php"><i className="fas fa-chevron-right"></i> Power BI</a></li>
    <li><a className='flink' href="sailpoint.php"><i className="fas fa-chevron-right"></i> Sailpoint</a></li>
    </ul>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-2">
    <h5 className="text-light">Useful Links</h5>
    <div className="mt-2">
    <ul className="list-unstyled footerLinks mb-0">
    <li><a className='flink' href="index.html"><i className="fas fa-chevron-right"></i> Home</a></li>
    <li><a className='flink' href="about-us.php"><i className="fas fa-chevron-right"></i> About Us</a></li>
    <li><a className='flink' href="courses.php"><i className="fas fa-chevron-right"></i> Courses</a></li>
    <li><a className='flink' href="batches.php"><i className="fas fa-chevron-right"></i> Batches</a></li>
    <li><a className='flink' href="testimonial.php"><i className="fas fa-chevron-right"></i> Testimonials</a></li>
    <li><a className='flink' href="contact-us.php"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
    <li><a className='flink' href="jobs.php"><i className="fas fa-chevron-right"></i> Jobs</a></li>
    <li><a className='flink' href="privacy-policy.php"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
    <li><a className='flink' href="terms-conditions.php"><i className="fas fa-chevron-right"></i> Terms and Conditions</a></li>
    </ul>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-2">
    <h5 className="text-light">Our Locations</h5>
    <div className="mt-2">
    <ul className="list-unstyled footerLinks mb-0">
    <li><a className='flink' href="software-testing-classNamees-in-warje.php"><i className="fas fa-chevron-right"></i> Pune</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-12 mb-2 text-light font-size16">
    <h5 className="text-light">Get in Touch</h5>
    <div className="my-3 text-justify font-size13">
    <img src={img} alt="CJC Logo" className="pb-2" height={70}/><br/>
    Mr.Kunal Sonu, the Director of Complete Java Classes has Masters degree in Computer 
    Applications. He has total 13+ Years of experience in providing technical skills &amp; consultancy in Java/J2EE technologies. He resigned from Syntel and opted lectureship career to give in depth knowledge and a better guidance to make career of needful professionals &amp; students.
    </div>

    </div>

    </div>

    <div className="row border-top py-2">
    <div className="col-sm-8 text-light">
    <span className="font-size18 mr-3">Get in Touch</span> &nbsp;&nbsp;&nbsp;
    <span className="mr-3"><i className="fa fa-phone-alt"></i> +91 8888-0222-04</span> &nbsp;&nbsp;&nbsp;
    <span className="mr-3"><i className="fa fa-envelope"></i> contact@completejavaclasses.com</span>
    </div>
    <div className="col-sm-4 text-right">
    <div className="icolor">
    <a className='flink' href="https://www.facebook.com/completejavaclasses/" target="_blank"><i className="fab fa-facebook font-size20 mr-2 icolor" aria-hidden="true"></i></a>&nbsp;&nbsp;
    <a className='flink' href="https://twitter.com/Completejavacls" target="_blank"><i className="fab fa-twitter font-size20 mr-2 icolor" aria-hidden="true"></i></a>&nbsp;&nbsp;
    <a className='flink' href="https://www.youtube.com/@completejavaclasses7609" target="_blank"><i className="fab fa-youtube font-size20 mr-2 icolor" aria-hidden="true"></i></a>&nbsp;&nbsp;
    <a className='flink' href="https://www.instagram.com/cjc_pune/" target="_blank"><i className="fab fa-instagram font-size20 mr-2" aria-hidden="true"></i></a>  &nbsp;&nbsp;
    <a className='flink' href="https://www.linkedin.com/company/complete-java-classes/" target="_blank"><i className="fab fa-linkedin-in font-size20 icolor" aria-hidden="true"></i></a>
    </div>
    </div>
    </div>
    </div>
</div>
  )
}

export default Footer;