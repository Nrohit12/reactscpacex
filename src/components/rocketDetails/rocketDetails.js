import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRockets } from "../../redux/action";
import ReactPlayer from "react-player";


function RocketDetails() {
  const url = "v4/rockets/";
  const  {selectedData} = useSelector((state) => state.selectedLaunch);
  const { rocketData, loading } = useSelector((state) => state.allRockets);
  const dispatch = useDispatch();

  const rocket_name = () => {
    let data = rocketData.filter(item => item.id === selectedData.rocket) 
    return data[0].name
  }

  useEffect(() => {
    dispatch(setRockets(url));
  }, [dispatch, url]);

  const LaunchDetail = () => 
     <div className="launchItem">
      <ReactPlayer
        url={selectedData.links.webcast == null ? 'https://youtu.be/TeVbYCIFVa8' : selectedData.links.webcast }
      />
      <div className="details">
        <h3>{selectedData.name}</h3>
        <div className="header">
          <div>
            <h5>Flight Number: {selectedData.flight_number}</h5>
            <p>Details: {selectedData.details === null ? "No Details found" : selectedData.details}</p>
            <p>Success: {selectedData.success ? "Successful" : "Not successful"}</p>
            <p>
              Payload: {selectedData.payloads.map(item => <strong> {item} </strong>)}
            </p>
            <p>Article: {selectedData.links.article === null ? "Not available" : selectedData.links.article}</p>
            <p>Wikipedia: {selectedData.links.wikipedia === null ? "Not available" : selectedData.links.wikipedia}</p>
            <h4>Rocket Name: {rocket_name()}</h4>
          </div>
          <span>{selectedData.date_local.split("T")[0]}</span>
        </div>

      </div>
      
      
    </div>
  

  return (
    <div className="launches">
      <div className="content">
        <div className="launch">
          {loading ? <div className="loading"></div> : <div>{<LaunchDetail />}</div> }
        </div>
      </div>
    </div>
  );
}

export default RocketDetails;
