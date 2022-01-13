import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import rocket from "../../assets/source.gif";
import { useDispatch, useSelector } from "react-redux";
import {setLaunches, selectedLaunch } from '../../redux/action'

const defaultImg = <img src={rocket} alt="Logo" className="img" />;

const tabsList = [
  {
    label: "Upcoming",
    navigate: "upcoming",
  },
  {
    label: "Latest",
    navigate: "latest",
  },
  {
    label: "Past",
    navigate: "past",
  },
];

function Launches() {
  const { page } = useParams();
  const url = `v5/launches/${page}`
  // const [loading, setloading] = useState(true);
  // const [launchData, setlaunchData] = useState([]);
  const {launchData, loading} = useSelector(state => state.allLaunches)
  const dispatch = useDispatch()
  // get launch data for different routes
  
  useEffect(() => {
    dispatch(setLaunches(url))
    
  }, [dispatch,url]);

  // rendering tabs
  const tabs = () =>
    tabsList.map((item, index) => (
      <Link
        to={`/launches/${item.navigate}`}
        key={index}
        className={item.navigate === page ? "tab active" : "tab inactive"}
      >
        <button>{item.label}</button>
      </Link>
    ));

    const selected = (item) => dispatch(selectedLaunch(item))
  // check for returned response is array or not
  const launchItems = () => {
    if (launchData.length === undefined)
      return <LaunchItem item={launchData} index={0} />;

    return launchData.map((item, index) => (
      <LaunchItem item={item} index={index} key={index} />
    ));
  };

  // rendering each item

  const LaunchItem = ({ item, index }) => (
    <Link to={`/launchDetails/${item.id}`} key={index} className="launchItem" onClick={() => selected(item)}>
      <div>
        {item.links.patch.small === null ? (
          defaultImg
        ) : (
          <img src={item.links.patch.small} alt="Logo" className="img" />
        )}
      </div>
      <div className="details">
        <h3>{item.name}</h3>
        <div className="header">
          <div>
            <h5>Flight Number: {item.flight_number}</h5>
            <p>Details: {item.details === null ? "No Details found" : item.details}</p>
          </div>
          <span>{item.date_local.split("T")[0]}</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="launches">
      <div className="content">
        <div className="tabs">{tabs()}</div>
        <div className="launch">
          {loading ? (
            <div className="loading"></div>
          ) : (
            <div>{launchItems()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Launches;
