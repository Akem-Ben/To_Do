"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createList_1 = require("../controllers/createList");
const router = express_1.default.Router();
router.post('/create', createList_1.createList);
exports.default = router;
