export interface TopHeadlinesArticlesInterface {
  author: string;
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  content: string;
  publishedAt: string;
  source: TopHeadlinesSourceInterface;
}

export interface TopHeadlinesSourceInterface {
  id: string;
  name: string;
}

export interface ResponseTopHeadlinesNewsDataInterface {
    totalResult: number;
    articles: TopHeadlinesArticlesInterface[];
    status: string;
}
