import React from 'react';
import Panel from './activity/panel';

const DatePanel = props => {
  const { activities, date, username } = props;
  const activityPanels = activities.map(activity => {
    return <Panel username={username} activity={activity} key={activity.id + 300}/>
  }).reverse();

  return (
    <li className="activities-date-panel">
      <h3>{date}</h3>
      <ul className="date-activities-list">
        {activityPanels}
      </ul>
    </li>
  )
};

export default DatePanel;