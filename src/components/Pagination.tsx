import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

function PaginationItem(props) {
  const { content, disabled = false, active = false, action } = props;
  let style = '';
  if (disabled) style = 'text-white bg-blue-200 ';
  else if (active) style = 'text-white bg-blue-600 ';
  else style = 'bg-white text-blue-600 ';

  return (
    <li>
      <button
        type="button"
        disabled={disabled}
        onClick={(e) => action(e)}
        className={`first:ml-0 text-xs font-bold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-200 ${style}`}
      >
        {content}
      </button>
    </li>
  );
}

export default function Pagination(props) {
  const { length, pc: ppc, pn, control } = props;
  const [active, setActive] = useState(pn);
  const [pageSize, setPageSize] = useState(ppc);
  const ps = Math.max(1, Math.ceil(length / pageSize));
  const [pageCount, setPageCount] = useState(ps);
  if (active !== pn || pageCount !== ps) {
    setActive(pn);
    setPageCount(ps);
  }
  const handle = (e, n) => {
    e.preventDefault();
    setActive(n);
    control(pageSize, n);
  };
  const dropdownHandle = (pc) => {
    setPageSize(pc);
    setPageCount(Math.max(1, Math.ceil(length / pc)));
    setActive(1);
    control(pc, 1);
  };
  const range = (i) => {
    let ar;
    if (i <= 3) ar = [1, 2, 3].filter((x) => x <= pageCount);
    else if (i > pageCount - 1) ar = [pageCount - 2, pageCount - 1, pageCount];
    else ar = [i - 1, i, i + 1];
    // pd,kd, nn
    return ar;
  };
  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <PaginationItem
            content={<FontAwesomeIcon icon="angle-double-right" size="lg" />}
            action={(e) => handle(e, 1)}
            disabled={active === 1}
          />
          <PaginationItem
            content={<FontAwesomeIcon icon="angle-right" size="lg" />}
            action={(e) => handle(e, active - 1 > 0 ? active - 1 : 1)}
            disabled={active === 1}
          />
          {range(active).map((el) => {
            return (
              <PaginationItem
                key={el}
                content={el}
                active={active === el}
                canActive
                action={(e) => handle(e, el)}
              />
            );
          })}
          <PaginationItem
            content={<FontAwesomeIcon icon="angle-left" size="lg" />}
            action={(e) =>
              handle(e, active + 1 < pageCount ? active + 1 : pageCount)
            }
            disabled={active === pageCount}
          />
          <PaginationItem
            content={<FontAwesomeIcon icon="angle-double-left" size="lg" />}
            action={(e) => handle(e, pageCount)}
            disabled={active === pageCount}
          />
        </ul>
      </nav>
      <div className="py-2">
        <Dropdown
          control={(pc) => dropdownHandle(pc)}
          values={[10, 25, 50]}
          initial={pageSize}
        />
      </div>
    </div>
  );
}
