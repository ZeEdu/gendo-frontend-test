import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
  @Input() repos: Repo[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
