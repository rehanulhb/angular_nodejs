import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule],
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'TextArea';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
