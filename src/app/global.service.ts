import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  countryCode = 'in';
  articles = [];
  constructor(
    private http: HttpClient
  ) { }

  getNewsTopHeadlines() {
    return new Promise((resolve, reject) => {
      this.setArticles([]);
      this.http.get(`https://newsapi.org/v2/top-headlines?country=${this.countryCode}&apiKey=9a37cd24fc3f45a6a8a3f12af436fe9b`).
      subscribe((data: any) => {
        this.setArticles(data.articles);
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  getArticles() {
    return this.articles;
  }

  setArticles(data: any) {
    this.articles = data;
  }
}
