import React from 'react';
import List from './components/List';
import RegionListItem from './components/RegionListItem';
import dataGen from './models/Region';

export default function Region() {
  const cols = ['id', 'regionname'];
  const tbName = 'المناطق';
  return (
    <List
      cols={cols}
      tbName={tbName}
      useComponent={RegionListItem}
      data={dataGen(50)}
    />
  );
}
