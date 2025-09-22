import React from 'react';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nama</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Jumlah</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Kategori</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tanggal</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{t.name}</td>
              <td className="py-3 px-4">Rp {t.amount.toLocaleString('id-ID')}</td>
              <td className="py-3 px-4">{t.category}</td>
              <td className="py-3 px-4">{new Date(t.date).toLocaleDateString('id-ID')}</td>
              <td className="py-3 px-4 flex space-x-2">
                <button onClick={() => onEdit(t)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold py-1 px-2 rounded">Edit</button>
                <button onClick={() => onDelete(t.id)} className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {transactions.length === 0 && <p className="text-center text-gray-500 mt-4">Belum ada transaksi.</p>}
    </div>
  );
};

export default TransactionList;