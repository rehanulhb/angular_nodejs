import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  //   posts = [
  //     {
  //       title: 'First Post',
  //       content: 'This is the First Post Content',
  //     },
  //     {
  //       title: 'Second Post',
  //       content: 'This is the Second Post Content',
  //     },
  //     {
  //       title: 'Third Post',
  //       content: 'This is the third Post Content',
  //     },
  //   ];

  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
