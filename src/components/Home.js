import React from "react";
import image from "../download.jpg"
import image1 from "../download1.png"


const hello = () =>
{
    // return props.data()
}
const Home = (props) =>{
    console.log("home",props);

return(

    <>
        {/* <h1>Hellooooo   </h1> */}
        <div className="add-to-cart d-flex"> <img src={image1} className="img-thumbnail rounded justify-content-center add "/>
          </div>
        <div className="Container m-5">
        <div className="row cart-wrapper">
        <div className="col-auto img-wrapper item">
            <img src={image} className="img-thumbnail rounded float-left"/>
           <br/> 
            </div>
            <div className="col-auto">
            <div>I-phone</div>
            <span>Price - 50000</span>
            </div>
            <div className="col-auto">
            <button type="button" className="btn btn-primary" onClick={hello}>Add to cart</button>
            </div>
        </div>
        </div>
    </>
)
}

export default Home;