import React from 'react';

export default function SessionListItem(props) {
  const { item: session } = props;
  const { id, sessionname, start, end, deadline, price, fixedTx } = session;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{id}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {sessionname}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{start}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{end}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{deadline}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{fixedTx}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          type="button"
          className="text-indigo-600 leading-5 text-sm font-medium"
        >
          تعديل
        </button>
      </td>
    </tr>
  );
}
