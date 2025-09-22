const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Mengizinkan request dari domain lain (frontend kita)
app.use(express.json()); // Mem-parsing body request menjadi JSON

// --- API Endpoints ---

// 1. GET: Mendapatkan semua transaksi
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: {
        date: 'desc',
      },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Tidak dapat mengambil data transaksi' });
  }
});

// 2. POST: Membuat transaksi baru (Input)
app.post('/api/transactions', async (req, res) => {
  try {
    const { name, amount, category, date } = req.body;
    const newTransaction = await prisma.transaction.create({
      data: {
        name,
        amount: parseFloat(amount),
        category,
        date: new Date(date),
      },
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Gagal membuat transaksi baru' });
  }
});

// 3. PUT: Memperbarui transaksi (Manipulasi)
app.put('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, amount, category, date } = req.body;
    const updatedTransaction = await prisma.transaction.update({
      where: { id: parseInt(id) },
      data: {
        name,
        amount: parseFloat(amount),
        category,
        date: new Date(date),
      },
    });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Gagal memperbarui transaksi' });
  }
});


// 4. DELETE: Menghapus transaksi (Manipulasi)
app.delete('/api/transactions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.transaction.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus transaksi' });
  }
});


app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});