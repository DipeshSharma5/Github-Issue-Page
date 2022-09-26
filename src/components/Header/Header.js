import React from 'react'
import './Header.css';
import {GoCode,GoIssueOpened,GoGitPullRequest,GoPlay,GoProject,GoBook,GoKey,GoInfo} from 'react-icons/go';

function Header() {

  const listofTabs = [
    { name: "Code", icon: GoCode },
    { name: "Issues", icon: GoIssueOpened },
    { name: "Pull Requests", icon: GoGitPullRequest },
    { name: "Actions", icon: GoPlay },
    { name: "Projects", icon: GoProject },
    { name: "Wiki", icon: GoBook },
    { name: "Security", icon: GoKey },
    { name: "Insights", icon: GoInfo },
  ];
  return (
    <div className='header'>
      <div className="header-top">
        <div className="left">
          <p>facebook / react</p>
          <button className='public'>Public</button>
        </div>
        <div className="right">
          <button>Watch 6.7k</button>
          <button>Fork 40.2k</button>
          <button>Star 195k</button>
        </div>
      </div>
      <div className="header-bottom">
        <ul>
          {listofTabs.map((tab,idx) => (
            <li key={idx} style={{cursor: 'pointer'}}> <tab.icon /> {tab.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header