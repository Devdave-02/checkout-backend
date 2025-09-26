E-commerce Checkout System
  This project is a simplified e-commerce checkout system. It uses a microservices approach,but for this challenge, only the cart-service is implemented. The frontend interacts with this service to add and view cart items.
  
1. Architecture
   Microservices Overview:
     | Service           | Purpose                               | Data Handled                 |
     |------------------|----------------------------------------|------------------------------|
     | Auth-service      | User login and authentication         | Users, passwords, sessions   |
     | Cart-service      | Manage user cart items (implemented)  | UserId, productId, quantity  |
     | Payment-service   | Process payments                      | Payment info, transactions   |
     | Order-service     | Confirm and store orders              | OrderId, UserId, cart details|

Architecture Diagram:
Cart System Architecture
``text
+--------------------+          POST /api/cart
|   Frontend (UI)    | ------------------------> +------------------+
|  React / Next.js   |                            |   Cart Service   |
|                    | <------------------------ | (Node.js + MongoDB) |
|                    |          GET /api/cart/:userId |                |
+--------------------+                            +------------------+
                                                       |
                                                       | POST /api/orders
                                                       v
                                                 +------------------+
                                                 |  Orders Service  |
                                                 | (Node.js + MongoDB) |
                                                 +------------------+
How it works:
i. Frontend calls POST /api/cart to add items to the cart.  
ii. Frontend calls GET /api/cart/:userId to fetch current cart items.  
iii. When the user checks out, Frontend calls POST /api/orders to create an order from the cart items.  
iv. Cart Service and Orders Service use MongoDB to store data.

                                          
2. Backend Setup (Cart-Service)
Run locally:
Open the terminal
cd <checkitem-backend>
node index.js
   
Frontend Setup (React / Next.js)
Run locally:
Open terminal
cd <checkout-frontend>
npm run dev

Deploy to Vercel:
live URL: https://checkout-frontend-omega.vercel.app/

3. API Endpoints
The backend provides the following endpoints for the website:
1. Cart Endpoints
   POST /api/cart 
   Purpose: Add an item to a user's cart.
   
   GET /api/cart/:userId
   Purpose: Get all items in a user's cart.
   
2. Orders Endpoint
   POST /api/orders  
   Purpose: Create an order from the items in the cart.  
  



