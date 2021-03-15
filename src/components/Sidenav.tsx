import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidenav(props) {
  const { routes } = props;
  return (
    <div>
      <ul>
        {routes.map((rt, i) => (
          <li key={i}>
            <Link to={rt}>
              <small>{rt}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
