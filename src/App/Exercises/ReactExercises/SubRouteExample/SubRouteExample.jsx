import React from 'react';

import './style.css';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreorLess } from '../MoreOrLess/MoreOrLess';

export function SubRouteExample() {
  return (
    <div>
      <SeeOrNot />
      <hr />
      <MoreorLess />
    </div>
  );
}
