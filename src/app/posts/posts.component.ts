import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 posts: any = [];

  constructor(private postsService: PostService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
