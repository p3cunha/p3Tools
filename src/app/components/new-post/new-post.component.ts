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
    author: JSON.stringify(this.blogFacade.user),
  });

  formValid$ = this.postForm.valueChanges.pipe(
    map(() => Boolean(this.postForm.status === 'VALID'))
  );

  constructor(private blogFacade: BlogFacade, private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.postForm.value);

    this.blogFacade.creatPost(this.postForm.value).subscribe();
  }
}
