import { useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./StockUpdates.css";

const StockUpdates = () => {
  const {stockUpdates} = useOutletContext();
  return (
    <div className="news">
        <h1>Stock Updates</h1>
        {stockUpdates && <Posts stocks={true} blogs={stockUpdates}/>}
    </div>
  )
}

export default StockUpdates;