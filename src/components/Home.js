import React from "react";

const Home = () =>{

return(

    <>
        <h1>Hellooooo   </h1>
        <div className="Container">
        <div className="row">
        <div className="col-2">
            <img src="image.png" className="img-thumbnail rounded float-left"/>
           <br/> <div>I-phone</div>
            </div>
            <div className="col-2">
            <span>Price - 50000</span>
            </div>
            <div className="col-2">
            <buttpn type="button" className="btn btn-primary">Add to cart</buttpn>
            </div>
        </div>
        </div>
    </>
)
}

export default Home;