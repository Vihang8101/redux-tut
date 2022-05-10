import {connect} from "react-redux"
import Home from "../components/Home";
import { addToCart } from "../srevices/Action/Action";

const mapDispatchToProps =dispatch =>(
    {
        addToCartHandler : data => dispatch(addToCart(data))
    }
)
const mapStateToProps = data => (
    {

    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;