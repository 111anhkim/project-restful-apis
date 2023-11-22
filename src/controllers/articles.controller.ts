import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import articlesService from '../services/articles.service';

const getAllArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await articlesService.getAllArticles();
    sendJsonSuccess(res)(articles); // Gọi hàm mà có truyền giá trị cho data
  } catch (error) {
    next(error);
  }
};

const getArticleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const article = await articlesService.getArticleById(req.params.id)

    sendJsonSuccess(res)(article);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //thêm phần tử mới vào articles[]
    const payload = req.body;
    const newArticles = await articlesService.createItem(payload);
    sendJsonSuccess(res)(newArticles);
  } catch (error) {
    next(error);
  }
};


export default {
  getAllArticles,
  getArticleById,
  createItem,
};
