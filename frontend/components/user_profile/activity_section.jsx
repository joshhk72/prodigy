import React from 'react';
import DatePanel from './date_panel';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';

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
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        loadMore={props.fetchPage}
        hasMore={!props.last}
        loader={
          <ReactLoading 
            className="activity-loading" 
            type={"spin"} 
            color={"black"} 
            height={50} 
            width={50}/>
          }
        element='ul'
        className='activities-date-list'
        threshold={0}
      >
        {datePanels}
      </InfiniteScroll>
    </div>
  )
};

export default ActivitySection;