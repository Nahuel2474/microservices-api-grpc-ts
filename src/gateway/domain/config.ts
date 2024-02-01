

export const config = {
    port: process.env.APIGATEWAY_PORT,
    grpc_port: process.env.GRPC_SERVER_PORT,
    grpc_url: process.env.GRPC_SERVER_URL,
    jwt_secret: process.env.JWT_SECRET
}