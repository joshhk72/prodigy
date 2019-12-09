import React from 'react';
import DatePanel from './date_panel';

const ActivitySection = props => {
  const { activities, username } = props;
  const filtered = {};
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  activities.forEach(activity => {
    const date = new Date(activity.created_at).toLocaleDateString(undefined, dateOptions);
    if (!(date in filtered)) {
      filtered[date] = [activity];
    } else {
      filtered[date].push(activity);
    }
  })

  const datePanels = Object.keys(filtered).sort((d1,d2) => new Date(d2) - new Date(d1)).map(d => {
    return <DatePanel key={d} date={d} username={username} activities={filtered[d]}/>
  });

  return (
    <div className="activity-section">
      <ul className="activities-date-list">
        {datePanels}
      </ul>
    </div>
  )
};

export default ActivitySection;