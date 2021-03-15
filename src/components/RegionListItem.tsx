/* eslint-disable react/prop-types */
import React from 'react';

export default function RegionListItem({ item: { id, regionname } }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-md text-gray-900">{regionname}</div>
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
