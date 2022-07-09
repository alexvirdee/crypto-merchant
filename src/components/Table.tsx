import React from 'react';

const Table: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Merchant
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Amount (Crypto)
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Price/crypto (USD)
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Amount (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-800 boder-gray-900">
                  <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                    ShirtTown
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    T-shirts
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    1.43219876
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    BTC
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $9,285.93
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $13,299.30
                  </td>
                </tr>
                <tr className="border-b bg-gray-800 boder-gray-900">
                  <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                    ShirtTown
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    T-shirts
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    1.43219876
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    BTC
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $9,285.93
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $13,299.30
                  </td>
                </tr>
                <tr className="border-b bg-gray-800 boder-gray-900">
                  <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                    ShirtTown
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    T-shirts
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    1.43219876
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    BTC
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $9,285.93
                  </td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    $13,299.30
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
