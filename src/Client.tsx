import React from 'react';
import List from './components/List';
import ClientListItem from './components/ClientListItem';
import dataGen from './models/Client';

export default function Client() {
  const cols = ['ref', 'name', 'cin', 'region', 'status'];
  const tbName = 'الحرفاء';
  return (
    <List
      cols={cols}
      tbName={tbName}
      useComponent={ClientListItem}
      data={dataGen(50)}
    />
  );
}
