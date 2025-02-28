# 🛍️ Vincent Shopee - E-commerce Web Application

A **Frontend Developer Take-Home Test** from Playa3ull.  
This project is a **responsive e-commerce web application** with authentication, product listing, cart functionality, and a **simple checkout (fake)**.

## 🚀 **Live Demo**
🔗 **[View the live site on Vercel](https://test-frontend-engineer-lemon.vercel.app/)**  

---

## 📌 **Features & Functionality**
✅ **Google Authentication & Guest Login**  
✅ **Product Listing Page** (with pagination & filtering)  
✅ **Product Detail Page** (with cart functionality)  
✅ **Shopping Cart** (Zustand-powered)  
✅ **Simple Checkout** (Fake checkout – No payment integration)  
✅ **Responsive Design** (Mobile-friendly UI)  

---

## 🛠️ **Technologies Used**
### 🔹 **Frameworks & Libraries**
- 🟢 **Next.js** – React framework for SSR & performance.
- 🟠 **TypeScript** – Strongly typed JavaScript.
- 🔵 **TailwindCSS** – Utility-first styling.
- 🎨 **React Icons** (`react-icons/fi`) – For consistent UI.

### 🔹 **State Management**
- ⚡ **Zustand** – A lightweight and performant state management library.
- ❓ Why Zustand? After research, it's **recommended for e-commerce sites** due to its simplicity & efficiency.

### 🔹 **API**
- 🔗 **FakeStoreAPI** – RESTful API for product data.
- ❌ **GraphQL API** – Considered but found no useful free API.

### 🔹 **Code Quality**
- ✅ **Follows S.O.L.I.D principles** (Scalability & Maintainability).
- ✅ **Uses Compound Components** for clean architecture.

### 🔹 **Testing**
- 🛠️ **Not implemented** (Future scope).

---

## ⚙️ **Setup & Installation**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/vincent-softdev/test-frontend-engineer.git
cd test-frontend-engineer
```

### 2️⃣ **Install Dependencies**
```sh
yarn install
```

### 3️⃣ **Setup Environment Variables**
1. **Create a `.env.local` file** in the root directory.
2. **Add Firebase Credentials:**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4️⃣ **Run the Development Server**
```sh
yarn dev
```
- The app will run at **`http://localhost:3000`**.

---

## 🔐 **Authentication**
- 🔑 **Google Authentication** using Firebase Auth.
- 🛡 **AuthGuard**: **Forces login** before accessing any page.
- 🔓 **Guest Login** option available.

---

## 📖 **Project Structure**
Some information about my project structure
```
📂 src
 ┣ 📂 app
 ┃ ┣ 📂 products
 ┃ ┣ 📂 cart
 ┃ ┣ 📂 checkout
 ┃ ┣ 📂 success
 ┃ ┗ 📜 layout.tsx
 ┣ 📂 components
 ┃ ┣ 📂 Header
 ┃ ┗ 📂 checkout
 ┣ 📂 store
 ┃ ┗ 📜 useCartStore.ts (Zustand store)
 ┣ 📂 services
 ┃ ┗ 📜 ProductService.ts
 ┗ 📂 public
   ┗ 📜 vincent_ly.jpg
```

---

## 📜 **Function Explanation**
### 🔹 **Authentication**
- 🆕 **Google Login using Firebase**
- 🚀 **Guest Login Available**
- 🛡 **AuthGuard** ensures only logged-in users access pages.

### 🔹 **Shopping Cart**
- 🛍 **Uses Zustand for global state**
- ➕ **Users can add, update, or remove items**
- ✅ **Item count updates dynamically in the header**

### 🔹 **Checkout (Fake)**
- 🛒 **Step-based Checkout Process**
- 💳 **Fake payment method selection**
- 🎉 **Order Confirmation Page**
- 🧹 **Cart is cleared after order confirmation**

---

## 🎨 **Design Decisions**
- ✅ **Minimalistic UI** for better user experience.
- 📱 **Fully responsive** on **Mobile, Tablet & Desktop**.
- 🛠 **Reusability** via **Compound Components** and **S.O.L.I.D principles**.

---

## 🔗 **Connect With Me**
[![GitHub](https://img.shields.io/badge/-GitHub-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vincent-softdev)  
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/the-vinh-ly/)  
[![Portfolio](https://img.shields.io/badge/-Portfolio-black?style=for-the-badge&logo=vercel)](https://vincently.dev)  

---

## 🔥 **BONUS: Developer Notes**
- **Icons for comments & code review**
  - ✅ **Good practice / Correct** → `✔`
  - ❌ **Bad practice / Incorrect** → `✖`
  - 🔥 **Important / Performance issue** → `🔥`
  - 🛠 **Work in progress (WIP)** → `🛠`
  - 🚀 **Optimization / Performance improvement** → `🚀`
  - 🐞 **Bug / Known issue** → `🐞`
  - 🔒 **Security-related code** → `🔒`
  - 📌 **Important note / Reference** → `📌`
  - 🔑 **API key / Authentication** → `🔑`

---

## 📢 **Future Improvements**
- ✅ **Add Testing (Jest / React Testing Library)**
- ✅ **Implement Real Payment Gateway (Stripe)**

---

## 🏆 **Final Thoughts**
🎯 **This project follows modern frontend standards** with **Next.js, TypeScript, and Zustand**.  
🎯 **Fully optimized for performance & maintainability**.  