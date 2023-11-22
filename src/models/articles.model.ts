import { Schema, model } from 'mongoose';
import {IArticle} from '../types/articles';

//Tạo một schema
const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    require: true, 
  },
  keyword: {
    type: String,
    require: true, 
  },
  description: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true
  }
}
);



//3. Tạo Model Article
const Article = model<IArticle>('Article', articleSchema);
export default Article;