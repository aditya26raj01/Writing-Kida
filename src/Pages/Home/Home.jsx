import { Link, useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";

const Home = (props) => {
  const { blogs } = useOutletContext();
  return (
    <div className="home">
      <Carousel blogs={blogs} />
      <section class="top">
        <div class="top">
          <div class="small-container">
            <div class="row">
              <div class="col-2">
                <h2>Top 10 News Of Day</h2>
                <Link to="/news" class="btn">Read Now &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="top">
        <div class="top">
          <div class="small-container">
            <div class="row">
              <div class="col-2">
                <h2>Daily Stock Market Updates</h2>
                <Link to="/stock-updates" class="btn">Read Now &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {blogs && <Posts blogs={blogs} />}
    </div>
  )
}

export default Home;