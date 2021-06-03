import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Post} from "../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  fullPost: Post;
  constructor(private router:Router) {
    this.fullPost=this.router.getCurrentNavigation()?.extras.state as Post;
  }

  ngOnInit(): void {
  }

}
