import { useState } from 'react';

export default function Login(){
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => { //all form changes will directly transferred to inputs variable
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const Register = (event) => {
    event.preventDefault();
    var url="https://dy71wcl0rh.execute-api.ap-southeast-1.amazonaws.com/staging/register";
    fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        username:inputs['username'],
        password:inputs['password'],
        password_confirmation:inputs['password'],
      })
    }).then(
      (response) => response.json()
    ).then((result)=>{
      alert(JSON.stringify(result));
    }).catch(error => console.warn(error));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //var url="http://localhost/test_react.php";
    var url="https://dy71wcl0rh.execute-api.ap-southeast-1.amazonaws.com/staging/login";
    fetch(url,{
      method:"POST",
      //headers:{"Content-Type":"application/x-www-form-urlencoded"},
      headers:{"Content-Type":"application/json"},
      //body:new URLSearchParams(inputs).toString()
      body:JSON.stringify(inputs)
    }).then(
      (response) => response.json()
    ).then((result)=>{
      alert(JSON.stringify(result));
    }).catch(error => console.warn(error));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={inputs["username"] || ""}  onChange={handleChange}/>
      <input name="password" value={inputs["password"] || ""}  onChange={handleChange}/>
      <button type="submit">Submit</button>
      <button type="button" onClick={Register}>Register</button>
    </form>
  );
}