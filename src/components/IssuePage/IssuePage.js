import React from 'react'
import './IssuePage.css';
import { IconContext } from "react-icons";
import { FaRegDotCircle } from "react-icons/fa";

function IssuePage(props) {
    return (
        <>
            <div className="issue">
            <div className="issue-info">
                <IconContext.Provider value={{className:"circle-icon" }}>
                <FaRegDotCircle/> 
                </IconContext.Provider>
                <p>{props.issue.title}</p>
                <div className="badges">
                {props.issue.labels && props.issue.labels.map((label,idx) => (
                <Status key={idx} title={label.name} color={label.color}/>
                ))}
                </div>
            </div>
            <div className="user-info">
                <p>#{props.issue.number} opened on {new Date(props.issue.created_at).toLocaleDateString()} by {props.issue.user.login}</p>
            </div>
            </div>
    </>
    );
}

function Status ({title,color}) {
    const styles = {
      display: "inline-block",
      padding: "0 7px",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      whiteSpace: "nowrap",
      border: "1px solid transparent",
      borderRadius: "2em",
      color: `#${color}`,
      backgroundColor: `rgba(red(#${color}),green(#${color}),blue(#${color}),0.3)`,
      borderColor: `#${color}`,
      marginRight: '0.2rem'
    }
    return (
      <div style={styles}>{title}</div>
    )
  }

export default IssuePage;