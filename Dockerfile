# Gunakan image dasar node yang sesuai
FROM node:14.21.2-alpine

# Setel direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json untuk menginstal dependencies terlebih dahulu
COPY package*.json ./

# Instal dependencies
RUN npm install
RUN npm install dotenv

# Salin seluruh file proyek ke dalam container
COPY . .

# Setel environment variable untuk port
ENV PORT 3000

# Ekspose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
