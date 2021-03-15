import React from 'react';
import { createPopper } from '@popperjs/core';

const Dropdown = (props) => {
  // dropdown props
  const { control, values, initial } = props;
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [value, setValue] = React.useState(initial);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-blue-500 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-white active:bg-white ease-linear transition-all duration-150"
              type="button"
              ref={btnDropdownRef}
              onClick={() =>
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }
            >
              عدد العناصر : {value}
            </button>
            <div
              ref={popoverDropdownRef}
              className={`${
                dropdownPopoverShow ? 'block ' : 'hidden '
              }bg-white text-base z-50 float-right py-2 list-none text-right rounded shadow-lg mt-1 min-w-48`}
            >
              {values.map((el) => {
                return (
                  <a
                    key={el}
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blue-500 hover:text-white hover:bg-blue-500"
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(el);
                      control(el);
                      closeDropdownPopover();
                    }}
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
