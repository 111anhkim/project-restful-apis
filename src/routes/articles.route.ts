import express from 'express';
import articlesController from '../controllers/articles.controller';

const router = express.Router();

//Get All articles from DB
router.get('/', articlesController.getAllArticles);

//get article by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', articlesController.getArticleById);

//Create a new article
router.post('/', articlesController.createItem);


//Xuất router ra
export default router;
