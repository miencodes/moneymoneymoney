import { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpenseChart from './components/ExpenseChart';

const API_URL = 'http://localhost:5000/api/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(API_URL);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleSave = async (transaction) => {
    try {
      if (editingTransaction) {
        // Update
        await axios.put(`${API_URL}/${transaction.id}`, transaction);
      } else {
        // Create
        await axios.post(API_URL, transaction);
      }
      fetchTransactions(); // Refresh data
      setEditingTransaction(null);
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTransactions(); // Refresh data
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Personal Expense Tracker</h1>
      </header>
      
      <main className="w-full p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            {editingTransaction ? 'Edit Transaksi' : 'Tambah Transaksi Baru'}
          </h2>
          <TransactionForm 
            onSave={handleSave} 
            initialData={editingTransaction}
            onCancel={() => setEditingTransaction(null)}
          />
        </div>

        <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Visualisasi Pengeluaran</h2>
                <ExpenseChart transactions={transactions} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Riwayat Transaksi</h2>
                <TransactionList 
                    transactions={transactions} 
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;