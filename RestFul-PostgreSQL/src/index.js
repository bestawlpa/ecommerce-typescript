"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("./routes/product"));
const app = (0, express_1.default)();
const port = 3030;
app.use(express_1.default.json());
app.use('/products', product_1.default);

app.get('/', (req, res) => {
    res.send('Welcome to the Product API!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
