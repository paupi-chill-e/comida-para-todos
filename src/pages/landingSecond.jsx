import React, { Fragment, Link } from 'react';

const LandingSecond = () => {
  return (
    <Fragment>
      <button className="btnFirst">
        <Link to="/LandingPage" className="no-decoration">
          Donar
        </Link>
      </button>
    </Fragment>
  );
}

export default LandingSecond;