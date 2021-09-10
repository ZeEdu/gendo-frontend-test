import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userProfile$: Observable<User>;

  constructor(private github: GithubService) {
    this.userProfile$ = this.github.getUser();
  }

  ngOnInit(): void {}
}
