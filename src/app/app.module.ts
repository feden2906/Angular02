import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    CommentsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'posts', component:PostComponent, children: [
          {path: ':id', component:PostDetailsComponent}
        ]},
      {path: 'comments', component:CommentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
