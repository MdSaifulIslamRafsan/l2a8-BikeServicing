# Bike Servicing Management API

## 📖 Project Summary
The **Bike Servicing Management API** is a backend application designed for bike servicing centers to manage customers, bikes, and service records. This API supports CRUD operations for customers, bikes, and services, along with additional features like marking services as completed and fetching overdue services.

---

## 🌐 Live Backend Link
[Live API on Render or Railway](#) <!-- Replace with the actual live backend link -->

---

## 🛠 Tech Stack
- **Node.js**: JavaScript runtime for fast and scalable server-side applications.
- **Express.js**: Minimalist web framework for building REST APIs.
- **TypeScript**: Enhances code quality with strong typing.
- **Prisma ORM**: Simplifies database management and migrations.
- **PostgreSQL**: Relational database for scalable and reliable data storage.

---

## 🚀 Key Features
1. **Customer Management**
   - Add, update, delete, and fetch customer details.

2. **Bike Management**
   - Add new bikes, fetch bike details, and manage bike ownership.

3. **Service Management**
   - Create service records, mark services as completed, and fetch service histories.

4. **Pending/Overdue Services**
   - Retrieve services that are overdue or still pending for more than 7 days.

5. **Standardized Error Handling**
   - Consistent and structured error responses for better debugging.

---

## 🛠 Setup Guide

### Prerequisites
1. Ensure **Node.js** (v16 or higher) is installed.
2. Set up a **PostgreSQL** database instance.
3. Install **npm** globally.

### Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/MdSaifulIslamRafsan/l2a8-BikeServicing.git
   cd l2a8-BikeServicing
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=your_postgresql_connection_string
     PORT=3000
     ```

4. Run Database Migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the Server:
   ```bash
   npm run dev
   ```

6. Access the API:
   - The API will be running at `http://localhost:3000`.

---

## 👨‍💻 Author
[MdSaifulIslamRafsan](https://github.com/MdSaifulIslamRafsan)
