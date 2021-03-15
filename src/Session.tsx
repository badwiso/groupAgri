import React from 'react';
import List from './components/List';
import SessionListItem from './components/SessionListItem';
import dataGen from './models/Session';

export default function Session() {
  const cols = [
    'id',
    'sessionname',
    'start',
    'end',
    'deadline',
    'price',
    'fixedTx',
  ];
  const tbName = 'الفترات';
  return (
    <List
      cols={cols}
      tbName={tbName}
      useComponent={SessionListItem}
      data={dataGen(10)}
    />
  );
}
