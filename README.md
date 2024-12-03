# Lesson API

API untuk mengelola data lessons dalam aplikasi pembelajaran. API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data lesson.

## Fitur API
- **GET /api/lessons** - Mendapatkan daftar semua lesson.
- **POST /api/lessons** - Menambahkan lesson baru.
- **GET /api/lessons/{id}** - Mengambil detail lesson berdasarkan ID.
- **PUT /api/lessons/{id}** - Mengupdate detail lesson berdasarkan ID.
- **DELETE /api/lessons/{id}** - Menghapus lesson berdasarkan ID.

## Prasyarat
Sebelum menggunakan API ini, pastikan kamu telah menginstal **Node.js** dan **npm** di sistem kamu.

- Node.js (v14 atau lebih baru)
- npm (v6 atau lebih baru)

## Instalasi

1. **Clone repository** ini ke mesin lokal:

   ```bash
   git clone https://github.com/username/lesson-api.git
Masuk ke direktori proyek:

bash
Copy code
cd lesson-api
Install dependensi menggunakan npm:

bash
Copy code
npm install
Jalankan server di lingkungan lokal:

bash
Copy code
npm start
Setelah server berjalan, API dapat diakses melalui http://localhost:3000.

Endpoint API
1. GET /api/lessons
Mengambil semua data lessons yang ada.

Response:
json
Copy code
[
  {
    "id": "lesson-123",
    "title": "Learn Basic A-F",
    "subTitle": "Beginner - 6 Lessons",
    "photoUrl": "https://example.com/image.png",
    "completed": false
  },
  {
    "id": "lesson-124",
    "title": "Learn Basic G-Z",
    "subTitle": "Beginner - 6 Lessons",
    "photoUrl": "https://example.com/image.png",
    "completed": true
  }
]
2. POST /api/lessons
Menambahkan lesson baru. ID akan di-generate secara otomatis menggunakan UUID.

Request Body:
json
Copy code
{
  "title": "Learn Advanced A-Z",
  "subTitle": "Intermediate - 10 Lessons",
  "photoUrl": "https://example.com/image.png",
  "completed": false
}
Response:
json
Copy code
{
  "message": "Lesson added successfully!",
  "lesson": {
    "id": "lesson-123e4567-e89b-12d3-a456-426614174000",
    "title": "Learn Advanced A-Z",
    "subTitle": "Intermediate - 10 Lessons",
    "photoUrl": "https://example.com/image.png",
    "completed": false
  }
}
3. GET /api/lessons/{id}
Mengambil detail lesson berdasarkan ID.

URL Contoh:
bash
Copy code
GET /api/lessons/lesson-123
Response:
json
Copy code
{
  "id": "lesson-123",
  "title": "Learn Basic A-F",
  "subTitle": "Beginner - 6 Lessons",
  "photoUrl": "https://example.com/image.png",
  "completed": false
}
4. PUT /api/lessons/{id}
Mengupdate detail lesson berdasarkan ID.

URL Contoh:
bash
Copy code
PUT /api/lessons/lesson-123
Request Body:
json
Copy code
{
  "title": "Learn Basic A-Z Updated",
  "subTitle": "Updated - 6 Lessons",
  "photoUrl": "https://example.com/image-updated.png",
  "completed": true
}
Response:
json
Copy code
{
  "message": "Lesson updated successfully!",
  "lesson": {
    "id": "lesson-123",
    "title": "Learn Basic A-Z Updated",
    "subTitle": "Updated - 6 Lessons",
    "photoUrl": "https://example.com/image-updated.png",
    "completed": true
  }
}
5. DELETE /api/lessons/{id}
Menghapus lesson berdasarkan ID.

URL Contoh:
bash
Copy code
DELETE /api/lessons/lesson-123
Response:
json
Copy code
{
  "message": "Lesson deleted successfully!"
}
Pengujian API
Untuk menguji API, kamu dapat menggunakan alat seperti Postman atau cURL. Berikut adalah beberapa contoh request yang dapat digunakan di Postman:

GET Request untuk mendapatkan semua lessons:
URL: http://localhost:3000/api/lessons

POST Request untuk menambah lesson baru:
URL: http://localhost:3000/api/lessons
Body:

json
Copy code
{
  "title": "Learn Advanced A-Z",
  "subTitle": "Intermediate - 10 Lessons",
  "photoUrl": "https://example.com/image.png",
  "completed": false
}
GET Request untuk mendapatkan lesson berdasarkan ID:
URL: http://localhost:3000/api/lessons/lesson-123

PUT Request untuk mengupdate lesson berdasarkan ID:
URL: http://localhost:3000/api/lessons/lesson-123
Body:

json
Copy code
{
  "title": "Learn Advanced A-Z Updated",
  "subTitle": "Updated - 10 Lessons",
  "photoUrl": "https://example.com/image-updated.png",
  "completed": true
}
DELETE Request untuk menghapus lesson berdasarkan ID:
URL: http://localhost:3000/api/lessons/lesson-123

