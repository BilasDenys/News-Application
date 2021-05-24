import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, delay, map} from 'rxjs/operators';
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
        delay(500),
        map(response => response.articles),
        catchError(error => throwError(error))
      );
  }

  fetchSourcesNews(country: string = 'us', category: string = 'general'): Observable<SourcesNewsInterface[]> {
    return this.http.get<ResponseSourcesNewsDataInterface>(`${environment.apiBaseURL}sources?language=en&country=${country}&category=${category}&apiKey=${environment.apiKey}`)
      .pipe(
        delay(500),
        map(sourceResponse => sourceResponse.sources),
        catchError(error => throwError(error))
      );
  }


  fetchEverythingNews(query: string): Observable<TopHeadlinesArticlesInterface[]> {
    return this.http.get<ResponseTopHeadlinesNewsDataInterface>(`
    ${environment.apiBaseURL}everything?q=${query}&pageSize=100&apiKey=${environment.apiKey}
      `)
      .pipe(
        delay(500),
        map(response => response.articles),
        catchError(error => throwError(error))
      );
  }
}
