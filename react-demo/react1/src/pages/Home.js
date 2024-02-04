import Header from "../components/Header";



export default function Home(){
  return(
    <div>
<Header/>
<section className="body">
    <div className="icon">
        <div className="icon-set"><i className="fa fa-google"></i></div>
         <li style={{'--i:0;'}}><a href=""><i className="fa fa-phone"></i></a></li>
         <li style="--i:0;"><a href=""><i className="fa fa-instagram"></i></a></li>
         <li style="--i:0;"><a href=""><i className="fa fa-github"></i></a></li>

    </div>
    </section>
    </div>
  )
}
