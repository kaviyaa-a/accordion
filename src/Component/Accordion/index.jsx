import React, {useState} from "react";
import data from "./data"
import './style.css'

export default function Accordion() {
const [selected,setSelected] = useState(null);

function handleSingleSelection(getCurrentId) {
 setSelected(getCurrentId === selected ? null : getCurrentId);
}
console.log(selected)

    return (
        <>
        <div className="accordion">
          <div className="wrapper">
            {data && data.length > 0 ? (data.map((dataItem) => (
            <div className="items">
            <div onClick={() => {handleSingleSelection(dataItem.id)}}>
              <div className="full-name">
                <h3>{dataItem.full_name}</h3>
                <span>+</span>
                </div>
              </div>
              {
                selected === dataItem.id ? (
                    <div className="email">{dataItem.email}</div>)
                    : null
              }
            </div>
            ))
        ) : (<div> No data found </div>)
        }
        </div>
        </div>
        </>
    )

    
}
    
        