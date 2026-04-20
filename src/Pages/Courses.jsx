import '../Pages/Courses.css';

function Courses() {

    let courses = [
    {
      image: 'https://t4.ftcdn.net/jpg/02/92/83/57/360_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg',
      title: 'FullStack Java',
      duration: '6 Months',
      price: '₹49,999',
      contents: 'Java, Spring Boot, Angular, MySQL',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2GEuLtKEqeLZanQmEE2b1-rKvPiYTZCvtQ&s',
      title: 'Python Django',
      duration: '4 Months',
      price: '₹39,999',
      contents: 'Python, Django, REST APIs',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
      {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgetwp_mRh4hGgebBMF4p2zcAi5Z4lNiO9w&s',
      title: 'React Developer',
      duration: '3 Months',
      price: '₹29,999',
      contents: 'React, Redux, Node.js',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQep9YbEPmgoMxrFRjnktYDVSePZcuLMoEqhw&s',
      title: 'Data Science',
      duration: '8 Months',
      price: '₹7,999',
      contents: 'Python, ML, AI, Pandas',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?width=640&crop=smart&auto=webp&s=53d250c9db70f2b0fe7a93de0cf57e7f7ffc2a06',
      title: 'Angular Developer',
      duration: '3 Months',
      price: '₹29,999',
      contents: 'Angular, TypeScript, RxJS',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://www.shutterstock.com/image-illustration/devops-software-development-operations-infinity-600nw-2271420609.jpg',
      title: 'DevOps',
      duration: '5 Months',
      price: '₹34,999',
      contents: 'Docker, Kubernetes, Jenkins',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
      {
      image: 'https://xpertlab.com/wp-content/uploads/2023/07/4-Pillars-of-Cloud-Computing-1.jpg',
      title: 'Cloud Computing',
      duration: '6 Months',
      price: '₹24,999',
      contents: 'AWS, Azure, GCP',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7JfBoSY56g_kdOOoR_g4S8pU5JWNOHe7m0k8nYgUexHpcNbvB40xNIEZxXX6Wvy7bQo&usqp=CAU',
      title: 'Cyber Security',
      duration: '4 Months',
      price: '₹14,999',
      contents: 'Network Security, Ethical Hacking',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://karnavatiuniversity.edu.in/wp-content/uploads/2025/04/artificial-intelligence-in-engineering.jpg',
      title: 'AI Engineer',
      duration: '7 Months',
      price: '₹29,999',
      contents: 'Deep Learning, NLP, TensorFlow',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
      title: 'Mobile App Development',
      duration: '5 Months',
      price: '₹15,999',
      contents: 'Flutter, React Native',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
 {
      image: 'https://static-bestcolleges.tosshub.com/2025/News/Fw6PE2uoAw6KjxXrJ8UZvKVVpgzBFcfxL28WroKR.jpg',
      title: 'Blockchain',
      duration: '6 Months',
      price: '₹19,999',
      contents: 'Ethereum, Smart Contracts',
      link:'https://completejavaclasses.com/java-j2ee.php'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSgzxg1idoLjibyC-wfwzlF0_yXaAioC6KA&s',
      title: 'UI/UX Design',
      duration: '3 Months',
      price: '₹9,999',
      contents: 'Figma, Adobe XD, Design Principles',
      link:'https://completejavaclasses.com/java-j2ee.php'
    }
  ];

    return (
    <div className="container-fluid my-4">
  <h2 className="text-center mb-4">Available Courses</h2>
  
  <div className="row">
    {/* Repeat this card 12 times */}

    {
        courses.map((cr,i)=>
        
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
            <img src={cr.image} className="card-img-top" alt={cr.title} />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title">{cr.title}</h5>
            <p className="card-text">
                <strong>Duration:</strong> {cr.duration} <br/>
                <strong>Price:</strong> {cr.price} <br/>
                <strong>Contents:</strong> {cr.contents}
            </p>
          <div className="mt-auto">
            <a href={cr.link} target="_blank"><button className="btn btn-primary">Join Now</button></a>
          </div>
        </div>
      </div>
    </div>
        )
    }
   </div>
</div>
  )
}

export default Courses;