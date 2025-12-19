import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
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

  @Input() posts: Post[] = [];
}
