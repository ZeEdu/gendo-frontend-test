import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
})
export class RepoItemComponent implements OnInit {
  @Input() repo: Repo | null = null;
  @Input() repoType: 'user' | 'starred' = 'user';
  constructor() {}

  ngOnInit(): void {}
}
