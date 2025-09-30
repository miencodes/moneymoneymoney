FROM node:18-alpine

WORKDIR /app

# Ini memanfaatkan cache Docker, jadi 'npm install' hanya berjalan jika ada perubahan dependensi
COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]