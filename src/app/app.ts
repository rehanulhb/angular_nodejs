import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@Component({
  selector: 'app-root',
  imports: [PostCreateComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-node');
}
