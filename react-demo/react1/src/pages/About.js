import nav from "../../react1/src/components/nav";
import './App.css'

export default function About(){
  return(
    <div className="form">
<nav/>
<form className="container">
  Name:<br/>
  <input type="text" placeholder="type"/><br/>
  Email:<br/>
  <input type="email" placeholder="type"/><br/>
  <input type="submit"/>
</form>
</div>
  )
}