import express from "express";
import cors from "cors";
import categoriesRoutes from "./src/routes/categories.routes.js";
import ordersRoutes from "./src/routes/orders.routes.js";
import productsRoutes from "./src/routes/products.routes.js";
import menuesRoutes from "./src/routes/menues.routes.js";
import usersRoutes from "./src/routes/users.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3000", // Cambia esto por tu dominio permitido
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/api/categories", categoriesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/menues", menuesRoutes);
app.use("/api/users", usersRoutes);

app.listen(4000, () => {
    console.log("Server on port 4000");
});
