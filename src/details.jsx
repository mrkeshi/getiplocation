import React from "react";
export default function Details(props){
         
 return <>
   <div className="card">
    <div className="img">
        <img src={props.info.country_flag}  />
    </div>
    <h3>country : <span>{props.info.country}</span></h3>
    <h3>region : <span> {props.info.region}</span></h3>

    <h3>city : <span> {props.info.city}</span></h3>
    <h3>isp : <span> {props.info.isp}</span></h3>
   </div>
 </> 


}