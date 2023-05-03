import { map } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogFacade } from 'src/app/store/blog.facade';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostComponent {
  postForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    blogPostsId: this.blogFacade.blog!.id,
    author: this.blogFacade.user,
    likes: new Array([this.blogFacade.user.userDataKey]),
  });

  constructor(private blogFacade: BlogFacade, private fb: FormBuilder) {}

  onSubmit() {
    this.blogFacade.creatPost(this.postForm.value).subscribe();
  }
}
