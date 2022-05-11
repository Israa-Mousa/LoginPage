
import React,{Component, useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser={
    email:'admin@admin.com',
    password:'admin123'
  }
  const [user, setUser]=useState({name:"",email:""})
  const [error,setError]=useState("");

  const Login=details=>{
     if(details.email==adminUser.email && details.password ==adminUser.password){
      console.log("logged in");
      setUser({
        name:details.name,
        email:details.email
      })
     }
     else{
       setError("Details not match")
      console.log("details not match");

     }
  }
  const Logout=()=>{
    setUser({
      name:"",
      email:""
    })
    console.log("logout");
}
  return (
    <div className="App">
    
      {(user.email!="")? (
       <div className='welcome'>
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
         </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )
      }
      <div>
        <a className="link" href="https://github.com/Israa-Mousa/LoginPage">Go to Code</a>
      </div>
    </div>

  );
}

export default App;
