import { Link } from "react-router-dom";
import "./Headline.css";

const Headline = () => {
  return (
    <div className="headline">
        <img src="/Images/Pm.jpeg" alt="" className="thumbnail" />
        <div className="content-wrapper">
            <Link to="/" className="tag">Politics</Link>
            <Link to="/" className="title">PM Of India</Link>
            <p className="description">
            The prime minister of India (IAST: Bhārat Ke Pradhānamantrī) is the head of government of the Republic of India. [2][3] Executive authority is vested in the prime minister and their chosen Council of Ministers,[4][5][6] despite the president of India being the nominal head of the
            </p>
            <div className="author">
                <img src="/Images/Gaiety.jpeg" alt="" className="avatar" />
                <div className="name-wrapper">
                    <div>By: <span className="name">Gaiety Bhabhya</span></div>
                    <div>Jan 25, 2023</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headline;