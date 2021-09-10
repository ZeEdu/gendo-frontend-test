import { Component, Input, OnInit } from '@angular/core';
import filterRepoList from 'src/app/helpers/filterRepoList';
import { Repo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-starred-repos',
  templateUrl: './starred-repos.component.html',
  styleUrls: ['./starred-repos.component.scss'],
})
export class StarredReposComponent implements OnInit {
  @Input() repos: Repo[] | null = null;
  repoList: Repo[] | null = null;

  constructor() {}

  emitFilter(query: string) {
    if (this.repos) this.repoList = filterRepoList(this.repos, query);
  }

  ngOnInit(): void {
    this.repoList = this.repos;
  }
}
