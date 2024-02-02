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



Este proyecto fue concebido con el propósito de aprender sobre las arquitecturas distribuidas de micorservicios la comunicacion entre servicios , centrandome especificamente en la implementacion de gRPC (gRPC Remote Procedure Calls). La eleccion de gRPC como tecnologia central de comunicacion entre los diferentes modulos del sistema fue tomada con el proposito de aprender la comunucacion sincrona entre servicios en un futuro 

Durante el desarrollo de este proyecto, mi enfoque no se limitó únicamente a la implementacion practica de los microservicios, sino que tambien abordé detenidamente la comprensión y aplicación de gRPC. Este protocolo, me permitio definir tipos (generados de los archivos protobuf) entender el uso de protocolos distintos a los usados comunmente (http) implementar una estructura de comunicacion eficaz y tipada de forma segura para la realizacion de consultas satisfactorias. 

[insertar imagen del flujo de comunicacion. './assets/flow-chart.png' ]

Durante el desarrollo de la API diseñe usando la programacion orientada a objetos, aprovechando las caracteristicas que me propporciona typescript para un marco de desarrollo optimo , definiendo las rutas http del servicio gateway con express por lo que el cliente podia solicitar informacion via una llamada http al servicio principal "gateway" donde este analizaba la consulta para  realizar las llamadas necesarias a los demas servicios por medio del cliente proporcionado por grpc. En si todas las operaciones pasaban por medio del servicio gateway los procesos subyacentes como la entrega de una lista de productos , usuarios o crear eliminar carritos, etc pasaba por los servicios necesarios.

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

