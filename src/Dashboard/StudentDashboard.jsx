
function StudentDashboard() {

  const [student, setStudent] = useState(null);
  let {email,passwprd} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:9090/login/${email}/${password}`)
    .then((res)=> setStudent(res.data))
    .catch((error)=> console.log(error))
  },[]);

  return (
    <div>
        <h1>StudentDashboard</h1>
    </div>
  )
}

export default StudentDashboard