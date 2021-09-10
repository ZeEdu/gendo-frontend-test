import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  public tabBar: 'repos' | 'starred' = 'repos';
  public userRepos$: Observable<Repo[]>;
  public starredRepos$: Observable<Repo[]>;

  constructor(private github: GithubService) {
    this.userRepos$ = this.github.getRepos();
    this.starredRepos$ = this.github.getStarredRepos();
  }

  ngOnInit(): void {}

  public handleClick(value: 'repos' | 'starred'): void {
    this.tabBar = value;
  }
}
