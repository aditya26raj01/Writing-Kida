import { Link, useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";

const Home = (props) => {
  const { blogs } = useOutletContext();
  return (
    <div className="home">
      <Carousel blogs={blogs} />
      <section className="top">
        <div className="top">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <h2>Top 10 News Of Day</h2>
                <Link to="/news" className="btn">Read Now &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top">
        <div className="top">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <h2>Daily Stock Market Updates</h2>
                <Link to="/stock-updates" className="btn">Read Now &#8594;</Link>
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