import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Myself = ({ asset }) => {

  const newAsset = useContext(AssetContext)



  return (
    <div>
      <h2>Myself</h2>
      <p><small>Asset:{asset}</small></p>
      <p><small>NewAsset:{newAsset}</small></p>
    </div>
  );
};

export default Myself;