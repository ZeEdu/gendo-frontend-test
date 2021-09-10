import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-starred-repos',
  templateUrl: './starred-repos.component.html',
  styleUrls: ['./starred-repos.component.scss'],
})
export class StarredReposComponent implements OnInit {
  @Input() repos: Repo[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
