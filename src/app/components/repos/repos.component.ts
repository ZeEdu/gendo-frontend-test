import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Repo } from 'src/app/interfaces/repo';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit, OnDestroy {
  public tabBar: 'repos' | 'starred' = 'repos';

  public userRepo$: Subscription;
  public userRepoList: Repo[] = [];

  public starredRepo$: Subscription;
  public starredRepoList: Repo[] = [];

  public repoList: Repo[] = [];

  public handleQueryEmitter(query: string) {
    if (this.tabBar === 'repos') {
      if (query === '') {
        this.repoList = [...this.userRepoList];
      } else {
        this.repoList = this.userRepoList.filter((repo) =>
          repo.full_name.includes(query)
        );
      }
    } else if (this.tabBar === 'starred') {
      if (query === '') {
        this.repoList = [...this.userRepoList];
      } else {
        this.repoList = this.userRepoList.filter((repo) =>
          repo.full_name.includes(query)
        );
      }
    }
  }

  constructor(private github: GithubService) {
    this.userRepo$ = this.github.getRepos().subscribe((repos) => {
      this.userRepoList = [...repos];
      if (this.tabBar === 'repos') {
        this.repoList = [...this.userRepoList];
      }
    });

    this.starredRepo$ = this.github.getStarredRepos().subscribe((repos) => {
      this.starredRepoList = [...repos];
      if (this.tabBar === 'starred') {
        this.repoList = [...this.starredRepoList];
      }
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.userRepo$) {
      this.userRepo$.unsubscribe();
    }
    if (this.starredRepo$) {
      this.starredRepo$.unsubscribe();
    }
  }

  public handleClick(value: 'repos' | 'starred'): void {
    this.tabBar = value;

    if (this.tabBar === 'repos') {
      this.repoList = [...this.userRepoList];
    } else if (this.tabBar === 'starred') {
      this.repoList = [...this.starredRepoList];
    }
  }
}
