import React, { useState } from 'react';
import Table from './components/Table';

const App: React.FC = () => {
  return (
    <>
      <div className="text-3xl pt-2 font-bold text-center text-bitpay-blue">
        BitPay Coding Challenge
      </div>
      <Table />
    </>
  );
};

export default App;
