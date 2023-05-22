import Headline from "../../Components/Headline/Headline";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Headline/>
      <Posts/>
    </div>
  )
}

export default Home;