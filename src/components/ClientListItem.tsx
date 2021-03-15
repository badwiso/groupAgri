import React from 'react';
import { Client } from '../models/Types';
import WORDS from './Translator';

export default function ClientListItem(props: { item: Client }) {
  const { item } = props;
  const { ref, name, cin, phone, region, status } = item;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{ref}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-md text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{phone}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {cin}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-md text-gray-900">{region.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full${
            status ? ' bg-green-100 text-green-800' : ' bg-red-100 text-red-800'
          }`}
        >
          {WORDS.state[`${status}`]}
        </span>
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
