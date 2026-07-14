import heroImage from '../assets/hero.png'
const NumberRendering = () => {
    const price = 50000
    const discount = 5000
    const isLogin = true
    const profileImage = null
    const email = undefined
    const getCompanyName=()=>{
        return "Google"
    }
    let arr = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"]
    const Company_Name = "HCL"
    const Total_Employees = 500
    const isHiring = true
    let ceo_arr = []
   const ceo = {
  name: "Joyal",
  company: "Google",
  position: "Chief Executive Officer (CEO)",
  age: 53,
  country: "India",
  experience: "Technology and Product Management",
  salary: "$226 Million (approx.)",
  joined: 2004
}
ceo_arr.push(ceo)
const Departments = [ "Software Development","Web Development","Mobile App Development","UI/UX Design","Quality Assurance (QA)","DevOps","Cloud Computing","Cyber Security","Data Science"]
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    designation: "Frontend Developer",
    department: "Web Development",
    salary: 65000
  },
  {
    id: 2,
    name: "Priya Nair",
    designation: "Backend Developer",
    department: "Software Development",
    salary: 70000
  }]
  const getLocation=()=>{
    return "Karnataka"
  }
  return (
    <>
    <h1><strong>Task 2 - Number Rendering</strong></h1>
    <h2>{price}, {discount}</h2>
    <h1><strong>Task 3 - Boolean Rendering</strong></h1>
    <h2>{isLogin?"Welcome User":"Please Login"}</h2> 
    <h1><strong>Task 4 - Null Rendering</strong></h1>
    <h2>{profileImage?<img src={heroImage.png} alt="heroImage"/>:"No Image Found"}</h2>
    <h1><strong>Task 5 - Undefined Rendering</strong></h1>
    <h2>{email?"Valid e-mail":"Email Not Available"}</h2>
    <h1><strong>Task 6 - Function Rendering</strong></h1>
    <h2>{getCompanyName()}</h2>
    <h1><strong>Task 7 - Array Rendering</strong></h1>
    {arr.map((heroName,i)=>(
       <p key={i+1}>{i+1}.{heroName}</p>
    ))}
    <h1>Mixed Rendering Assignment</h1>
    <h2><strong>Company Name:</strong>{Company_Name}</h2>
    <h2><strong>Total Employees :</strong>{Total_Employees}</h2>
    {isHiring?"Can we apply for a job? Yes":"Can we apply for a job? No Vacancy"}
    {ceo_arr.map((pname,i)=>(
        <>
        <h2><strong>CEO Details</strong></h2>
        <p key={i+1}>{pname.name}</p>
        <p key={i+1}>{pname.company}</p>
        <p key={i+1}>{pname.position}</p>
        <p key={i+1}>{pname.age}</p>
        </>
    ))}
    <h2><strong>Departments</strong></h2>
    {Departments.map((e,i)=>(
        <>
        <p key={i+1}>{e}</p>
        </>
    ))}
    <h2><strong>Employees</strong></h2>
    {employees.map((e,i)=>(
        <>
        <p>{e.id}</p>
        <p>{e.name}</p>
        <p>{e.department}</p>
        <p>{e.designation}</p>
        <p>{e.salary}</p>
        </>
    ))}
    <h2><strong>Location:</strong>{getLocation()}</h2>
    </>
  )
}

export default NumberRendering
