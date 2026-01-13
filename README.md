# 🛒 E-Commerce REST API

This is a backend **E-Commerce REST API** built using **Node.js, Express.js, and MongoDB**.  
It supports **user authentication**, **product CRUD operations**, and **shopping cart management** with JWT-based authentication.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Product Create, Read, Update, Delete (CRUD)
- Add / Remove products from Cart
- Increase / Decrease product quantity in Cart
- Clear complete Cart
- Secure protected routes

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (Authentication)
- bcryptjs (Password Hashing)

---

## 📌 API Endpoints

### 🔐 User APIs
- `POST /api/user/register` → Register new user  
- `POST /api/user/login` → Login user  

### 📦 Product APIs
- `POST /api/product/add` → Create product  
- `GET /api/product/all` → Get all products  
- `GET /api/product/:id` → Get product by ID  
- `PUT /api/product/:id` → Update product  
- `DELETE /api/product/:id` → Delete product  

### 🛒 Cart APIs (Authentication Required)
- `POST /api/cart/add` → Add product to cart  
- `GET /api/cart/user` → Get user cart  
- `POST /api/cart/-qty` → Decrease product quantity  
- `DELETE /api/cart/remove/:productId` → Remove product from cart  
- `DELETE /api/cart/clear` → Clear cart  

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
npm install
