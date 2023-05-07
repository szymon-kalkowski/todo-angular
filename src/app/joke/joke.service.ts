import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get<Joke[]>(
      'https://backend-omega-seven.vercel.app/api/getjoke'
    );
  }
}
