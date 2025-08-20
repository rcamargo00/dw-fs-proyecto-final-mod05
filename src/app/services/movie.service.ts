import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private jsonUrl = './assets/movies.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl)
      .pipe(
        map((movies: any[]) => movies.find(movie => movie.id === id))
      );
  }
}