import React, { useState, useEffect } from 'react';

const TransactionForm = ({ onSave, initialData, onCancel }) => {
  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (initialData) {
      setTransaction({
        ...initialData,
        date: new Date(initialData.date).toISOString().split('T')[0],
      });
    } else {
      resetForm();
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };
  
  const resetForm = () => {
     setTransaction({
        name: '', amount: '', category: '', date: new Date().toISOString().split('T')[0],
     });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(transaction);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Transaksi</label>
        <input type="text" name="name" value={transaction.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jumlah (Rp)</label>
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kategori</label>
        <select name="category" value={transaction.category} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            <option value="">Pilih Kategori</option>
            <option value="Makanan">Makanan</option>
            <option value="Transportasi">Transportasi</option>
            <option value="Hiburan">Hiburan</option>
            <option value="Tagihan">Tagihan</option>
            <option value="Lainnya">Lainnya</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tanggal</label>
        <input type="date" name="date" value={transaction.date} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div className="flex space-x-2">
         <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
           {initialData ? 'Update' : 'Simpan'}
         </button>
         {initialData && (
            <button type="button" onClick={() => { resetForm(); onCancel(); }} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
                Batal
            </button>
         )}
      </div>
    </form>
  );
};

export default TransactionForm;