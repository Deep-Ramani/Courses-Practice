import Link from "next/link";
import React from "react";

const EventItem = (props) => {

  const {title,image,date,location,id} = props;

  const humanRedableDate = new Date(date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year: numeric,
  });

  
  return (
    <li>
      
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>DATE</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
