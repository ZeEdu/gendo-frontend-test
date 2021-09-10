import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { StarredReposComponent } from './components/starred-repos/starred-repos.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ReposComponent,
    UserReposComponent,
    StarredReposComponent,
    InputFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
