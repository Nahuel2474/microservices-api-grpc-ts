"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIGateway = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../../../shared/config/config");
class APIGateway {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.server = this.start((_a = config_1.config.port) !== null && _a !== void 0 ? _a : '3000');
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes() {
        this.app.get('/', (_, res) => {
            res.send('¡Hola mundo!');
        });
        // Agrega más rutas según tus necesidades
    }
    start(port) {
        return this.app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    stop() {
        return this.server.close(() => console.log('server shut down.'));
    }
}
exports.APIGateway = APIGateway;
//# sourceMappingURL=index.js.map