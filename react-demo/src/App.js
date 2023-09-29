import logo from './logo.svg';
import './App.css';
import img from './cgpa.jpeg';

function App() {
  return (
<div className="App">
<div className="top"></div>

<div>
<table align="right">
    <tr>
        <th>GRADE</th>
        <th> POINTS</th>
        <th>MARK ALLOCATION</th>
    </tr>
    <tr>
        <td>O<br/>(Outstanding)</td>
        <td>10</td>
        <td>91-100</td>
    </tr>
    <tr>
        <td>A+<br/>(Execellent)</td>
        <td>9</td>
        <td>81-90</td>
    </tr>
    <tr>
        <td>A<br/>(Very Good)</td>
        <td>8</td>
        <td>71-80</td>
    </tr>
    <tr>
        <td>B+<br/>(Good)</td>
        <td>7</td>
        <td>61-70</td>
    </tr>
    <tr>
        <td>B<br/>(Average)</td>
        <td>6</td>
        <td>51-60</td>
    </tr>
    <tr>
        <td>C<br/>(Satisfactory)</td>
        <td>5</td>
        <td> 50 </td>
    </tr>
</table>
</div>


    <div className="container">
        <h1 className="heading">GPA CALCULATOR FOR 4TH SEMESTER</h1>
        <div className="image"><img src="cgpa.jpeg" /></div>
        <br />
        <form className="form" id="form" method="post" >
            <label for="Name"><strong className="size">Name:</strong></label>
        <input  type="text" name="Name" className="name" required /><br/><br/>

        <label for="Reg_no"><strong className="size">Reg no:</strong></label>
        <input  type="number" name="Reg_no" className="Register" required/><br/><br/>

        <label for="cs3452"><strong class="size">Theory Of Computation</strong></label><br/>
        <label for="cs3452"><strong>Subject Code : <strong className="color">CS3452</strong></strong></label><br/>
    <select name="cs3452" className="select" id="cs3452" required>
        <option>select grade point</option>
        <option>5</option>
        <option >6</option>
        <option >7</option>
        <option>8</option>
        <option>9</option>
        <option >10</option>
    </select>


    <div id="y"></div><br/> <br/>  
    <label for="cs3491"><strong>Artificial Intelligence and Machine Learning</strong></label><br/>
        <label for="cs3491"><strong>Subject Code : <strong className="color">CS3491</strong></strong></label><br/> 
    <select className="select" id="cs3491" name="cs3491" required>
        <option>select grade point</option>
        <option>5</option>
        <option >6</option>
        <option >7</option>
        <option>8</option>
        <option>9</option>
        <option >10</option>
    </select>
    <div id="r"></div><br/><br/>


    <label for="cs3492"><strong>Database Management System</strong></label><br/>
        <label for="cs3492"><strong>Subject Code : <strong className="color">CS3491</strong></strong></label><br/> 
    <select className="select" id="cs3492" name="cs3492" required>
        <option>select grade point</option>
        <option>5</option>
        <option >6</option>
        <option >7</option>
        <option>8</option>
        <option>9</option>
        <option >10</option>
    </select>
    <div id="b"></div><br/><br/>
    </form>
    </div>

<div className=" container2">
        <h2><strong>CALCULATE YOUR CGPA</strong></h2>
        <form className="form1" method="post" id="form1">
            <label for="name"><strong className="size">Name:</strong></label>
        <input  type="text" name="name" className="name" placeholder="Enter Your Name" required/><br/><br/>

        <label for="Reg"><strong className="size">Reg no:</strong></label>
        <input  type="number" name="Reg" className="Register" placeholder="Enter Your Reg_no" required/><br/><br/>

            <label for="third_sem_GPA"><strong>Third_sem_GPA</strong></label><br/>
            <input type="text"  name="third_sem_GPA" id="n1" placeholder="Third_sem_GPA" required/><br/>

            <label for="fourth_sem_GPA"><strong>Fourth_sem_GPA</strong></label><br/>
            <input type="text" name="fourth_sem_GPA" id="n2" placeholder="Fourth_sem_GPA" required/><br/><br/>

            <input type="checkbox" name="link" required /><label for="link">Please check the options are selected</label>
            <input type="submit" id="button" value="submit" onclick="ok()"/><br/><br/>
            <textarea id="final" name="final"></textarea></form>
            </div>
            
        


<div className="inside">
    
    <h1 className="h1">Formula for the CGPA Calculation</h1><br/>
    <p className="paragraph">The formula used to evaluate and calculate CGPA is follows:</p>
    <div className="formula">
        <img src="formula.jpg"/>
    </div>
    </div>

<div>
    <p className="end"><strong>The above copy rights have the cse department in shanmuganathan engineering college</strong>
    </p>
    </div>
</div>
  );
}

export default App;
