import React from 'react';
import './FamilyTree.css'
import Grandpa from './Grandpa';


const FamilyTree = () => {
  return (
    <div className='family-tree' >
      <h1>Family Tree</h1>
      <Grandpa></Grandpa>
    </div>
  );
};

export default FamilyTree;