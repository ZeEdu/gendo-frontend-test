import { Component, Input, OnInit } from '@angular/core';
import filterRepoList from 'src/app/helpers/filterRepoList';
import { Repo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
  @Input() repos: Repo[] | null = null;

  public repoList: Repo[] | null = null;

  emitFilter(query: string) {
    if (this.repos) this.repoList = filterRepoList(this.repos, query);
  }

  constructor() {}

  ngOnInit(): void {
    this.repoList = this.repos;
  }
}
