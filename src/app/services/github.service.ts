import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Repo } from '../interfaces/repo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get<User>('https://api.github.com/users/torvalds');
  }

  public getRepos() {
    return this.http.get<Repo[]>('https://api.github.com/users/torvalds/repos');
  }

  public getStarredRepos() {
    return this.http.get<Repo[]>(
      'https://api.github.com/users/torvalds/starred'
    );
  }
}
