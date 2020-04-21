import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => (
  <Fragment>
    <div>
      <img
        src={spinner}
        style={{ width: '50px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </div>
  </Fragment>
);

export default Spinner;
