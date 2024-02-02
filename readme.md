# Ecommerce API Implementing Microservices

### Short description 

An ecommerce API implementing microservices to handle users, products, carts. This application utilizes gRPC for efficient communication between services. Developed using TypeScript, Node.js, Docker, and Express.

### Technologies Used
- TypeScript
- Node.js
- gRPC
- Docker
- Express
- MongoDB (products)
- PostgreSQL (cart and user)
- Prisma

This project was conceived with the goal of delving into the world of distributed microservices architectures and inter-service communication, with a specific focus on implementing gRPC (gRPC Remote Procedure Calls). The choice of gRPC as the central technology for communication among the various modules of the system was made with the intention of understanding synchronous communication between services for future developments.

Throughout the project's development, my focus extended beyond the practical implementation of microservices. I delved into understanding and applying gRPC comprehensively. This protocol enabled me to define types (generated from protobuf files), comprehend the usage of protocols different from the commonly employed HTTP, and implement an efficient, type-safe communication structure for successful queries.


![diagram flow]['./assets/flow-chart.png']


In the development of the API, I embraced object-oriented programming, leveraging TypeScript's features for an optimal development framework. I defined the HTTP routes of the gateway service using Express, allowing clients to request information through an HTTP call to the primary "gateway" service. Here, the query was analyzed to make necessary calls to other services using the gRPC-provided client. In essence, all operations passed through the gateway service, with underlying processes such as delivering a list of products, managing users, or creating and deleting carts handled by the necessary services.

## Services Overview

Cart Service : 

- getCart
- getAllCarts
- createCart
- deleteCart
- addProductToCart
- deleteProductFromCart

User Service :

- getUser
- getUsers

Product Service :

- getProduct
- getAllProducts


## Instalation 

```
npm install
```



