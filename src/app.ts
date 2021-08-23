import "reflect-metadata";
import express from "express";
import createConnection from "./database";
import { router } from "./router";

createConnection();
export const app = express();

app.use(express.json());

app.use(router);