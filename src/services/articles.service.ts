import { Schema } from 'mongoose';
import Article from '../models/articles.model'
import {IArticle} from '../types/articles';


const getAllArticles = async () => {
  const articles = Article.find().select('-__v');
  return articles;
};

const getArticleById = async (id: string) => {
 const article = Article.findById(id).select('-__v');

 return article;
};

const createItem = async (payload: IArticle) => {
  const article =  await Article.create(payload);
  return article; 
  
};


export default {
  getAllArticles,
  getArticleById,
  createItem,
};
