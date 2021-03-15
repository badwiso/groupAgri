import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Pagination from './Pagination';
import WORDS from './Translator';

const rotation = {
  0: 1,
  1: 2,
  2: 0,
};

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function Header(props) {
  const { col, sort, dir } = props;
  let icon;
  if (dir === 2) {
    icon = (
      <FontAwesomeIcon
        icon="caret-up"
        size="lg"
        className="mr-2 mb-1 text-red-600"
      />
    );
  } else if (dir === 0) {
    icon = (
      <FontAwesomeIcon
        icon="caret-down"
        size="lg"
        className="mr-2 mb-1 text-red-600"
      />
    );
  } else {
    icon = <span />;
  }
  return (
    <th
      onClick={() => {
        sort(rotation[dir]);
      }}
      className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-right bg-gray-100 text-gray-600 border-gray-200"
    >
      {col}
      {icon}
    </th>
  );
}

export default function List(props) {
  const { cols, tbName, useComponent: ListItem, data } = props;
  const [pageCount, setPageCount] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [stream, setStream] = useState(data.slice());
  const ar = {};
  cols.map((x) => {
    ar[x] = 1;
    return 1;
  });
  let filtered = data;
  const [headers, setHeaders] = useState(ar);
  const handle = (pc, pn) => {
    setPageCount(pc);
    setPageNumber(pn);
  };
  const sort = (col, dir) => {
    cols.map((x) => {
      headers[x] = 1;
      return 1;
    });
    headers[col] = dir;
    setHeaders(headers);
    const tmp =
      dir === 1
        ? data.slice()
        : stream.slice().sort((a, b) => {
            return (
              (dir - 1) *
              compare(
                typeof a[col] === 'string'
                  ? `${a[col]}`
                  : typeof a[col] === 'object'
                  ? a[col].name
                  : a[col],
                typeof a[col] === 'string'
                  ? `${b[col]}`
                  : typeof a[col] === 'object'
                  ? b[col].name
                  : b[col]
              )
            );
          });
    filtered = tmp;
    setStream(tmp);
  };
  const contains = (e, v) => {
    return cols.some((c) => `${e[c]}`.includes(v));
  };
  const search = (e) => {
    const { target } = e;
    const { value } = target;
    const filter = filtered.filter((el) => contains(el, value));
    setStream(filter);
    handle(pageCount, 1);
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full w-5/6 flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-800">{tbName}</h3>
            </div>
            <div className="relative w-2/6 px-4">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <FontAwesomeIcon icon="search" size="lg" className="mr-2" />
              </span>
              <input
                type="text"
                placeholder={WORDS.search}
                onChange={(e) => search(e)}
                className="px-8 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
              />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {cols.map((col) => {
                  return (
                    <Header
                      key={col}
                      col={WORDS[col]}
                      sort={(dir) => sort(col, dir)}
                      dir={headers[col]}
                    />
                  );
                })}
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-right bg-gray-100 text-gray-600 border-gray-200">
                  {WORDS.empty}
                </th>
              </tr>
            </thead>
            <tbody>
              {stream
                .slice((pageNumber - 1) * pageCount, pageNumber * pageCount)
                .map((item) => {
                  return <ListItem key={item.id} item={item} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        length={stream.length}
        control={(pc, pn) => handle(pc, pn)}
        pc={pageCount}
        pn={pageNumber}
      />
    </>
  );
}
