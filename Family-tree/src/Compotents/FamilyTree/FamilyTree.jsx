import React, { createContext } from 'react';
import './FamilyTree.css'
import Grandpa from './Grandpa';

export const AssetContext = createContext('');


const FamilyTree = () => {



  const asset = 'Diamond';
  const newAsset = 'Gold';

  return (
    <div className='family-tree' >
      <h1>Family Tree</h1>
      <AssetContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;