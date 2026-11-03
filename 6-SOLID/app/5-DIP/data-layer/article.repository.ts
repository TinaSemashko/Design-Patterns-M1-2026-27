import { Article } from "../app-layer/article";
import { ArticleRepository } from "../app-layer/article.repository.interface";

export class DataArticleRepository implements ArticleRepository {
  save(article: Article): void {
    // Logic to save the article to a database
  }
}
