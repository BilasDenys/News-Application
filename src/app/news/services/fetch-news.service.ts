import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {
  ResponseTopHeadlinesNewsDataInterface,
  TopHeadlinesArticlesInterface
} from '../interfaces/TopHeadlinesInterface.interface';
import {ResponseSourcesNewsDataInterface, SourcesNewsInterface} from '../interfaces/SourcesNewsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchNewsService {

  constructor(private http: HttpClient) {
  }

  fetchTopHeadlinesCategoryNews(country: string = 'us', category: string = 'general'): Observable<TopHeadlinesArticlesInterface[]> {
    return this.http.get<ResponseTopHeadlinesNewsDataInterface>(`${environment.apiBaseURL}top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=${environment.apiKey}`)
      .pipe(
        map(response => response.articles),
        catchError(error => throwError(error))
      );
  }

  fetchSourcesNews(country: string = 'us', category: string = 'general'): Observable<SourcesNewsInterface[]> {
    return this.http.get<ResponseSourcesNewsDataInterface>(`${environment.apiBaseURL}sources?language=us&&country=${country}&category=${category}&apiKey=${environment.apiKey}`)
      .pipe(
        map(sourceResponse => sourceResponse.sources),
        catchError(error => throwError(error))
      );
  }


  fetchEverythingNews(query: string): Observable<TopHeadlinesArticlesInterface[]> {
    return this.http.get<ResponseTopHeadlinesNewsDataInterface>(`${environment.apiBaseURL}everything?language=us&sortBy=relevancy&q=${query}&pageSize=100&apiKey=${environment.apiKey}`).pipe(
      map(response => response.articles),
      catchError(error => throwError(error))
    );
  }
}
