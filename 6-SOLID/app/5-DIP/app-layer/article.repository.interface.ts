import type{ Article } from "./article";

export interface ArticleRepository {
    save(article: Article): void;
}
