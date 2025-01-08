# E-Commerce Application

This is a full-stack e-commerce application built using React on the frontend and Django on the backend. It provides a user-friendly platform for browsing products, managing orders, and handling administrative tasks.

## Features

### User Features

- Browse products with details.
- Add/remove products to/from the shopping cart.
- User authentication: register, login, and profile management.
- Shipping address and payment method selection.
- Place orders and view order details.

### Admin Features

- Manage users: view, update, and delete users.
- Manage products: view, update, delete, and add new products.
- View and manage orders.

## Frontend

The frontend is built with **React** and uses the following technologies:

- **React Router**: For routing and navigation.
- **React-Bootstrap**: For styling and layout.
- **Custom SCSS**: For additional styling.

### Key Files

- `src/components`: Contains reusable components such as `Header` and `Footer`.
- `src/screens`: Contains page-level components like `HomeScreen`, `CartScreen`, and `ProfileScreen`.
- `src/custom-bootstrap.scss`: Custom styles for the app.

### Available Routes

| Route                     | Component             | Description                  |
| ------------------------- | --------------------- | ---------------------------- |
| `/`                       | `HomeScreen`          | Displays a list of products. |
| `/product/:id`            | `ProductScreen`       | Shows product details.       |
| `/cart/:id?`              | `CartScreen`          | Displays the shopping cart.  |
| `/login`                  | `LoginScreen`         | User login page.             |
| `/register`               | `RegisterScreen`      | User registration page.      |
| `/profile`                | `ProfileScreen`       | User profile and orders.     |
| `/shipping`               | `ShippingScreen`      | Shipping address form.       |
| `/payment`                | `PaymentScreen`       | Payment method selection.    |
| `/placeorder`             | `PlaceOrderScreen`    | Order confirmation screen.   |
| `/order/:id`              | `OrderScreen`         | Order details page.          |
| `/admin/userlist`         | `UserListScreen`      | Admin user management.       |
| `/admin/user/:id/edit`    | `UserUpdateScreen`    | Admin edit user details.     |
| `/admin/productlist`      | `ProductListScreen`   | Admin product management.    |
| `/admin/product/:id/edit` | `ProductUpdateScreen` | Admin edit product details.  |
| `/admin/orderlist`        | `OrderListScreen`     | Admin order management.      |

---

## Backend

The backend is built with **Django** and uses **Django REST Framework** to expose APIs.

### Key Features

- Product management: CRUD operations on products.
- User authentication and management.
- Order management: Create, retrieve, and update orders.

### URL Endpoints

| Endpoint         | Functionality              |
| ---------------- | -------------------------- |
| `/api/products/` | Product-related endpoints. |
| `/api/users/`    | User-related endpoints.    |
| `/api/orders/`   | Order-related endpoints.   |
| `/admin/`        | Django admin panel.        |

---

## Running the Application

### Prerequisites

- **Node.js**: For running the frontend.
- **Python**: For running the backend.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
