import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Repo } from '../interfaces/repo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private username = 'torvalds';

  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get<User>(`https://api.github.com/users/${this.username}`);
  }

  public getRepos() {
    return this.http.get<Repo[]>(
      `https://api.github.com/users/${this.username}/repos`
    );
  }

  public getStarredRepos() {
    return this.http.get<Repo[]>(
      `https://api.github.com/users/${this.username}/starred`
    );
  }
}
