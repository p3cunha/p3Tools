import { APIService } from 'src/app/API.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, map, tap } from 'rxjs';
import { BlogFacade } from 'src/app/store/blog.facade';
import { Post } from 'src/app/models/post.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent {
  commentForm: FormGroup = this.fb.group({
    content: ['', [Validators.required]],
    postCommentsId: [null],
    author: this.blogFacade.user,
  });

  post$ = from(
    this.api.GetPost((this.activatedRoute.snapshot.params as Post).id)
  ).pipe(
    tap((post) => this.commentForm.patchValue({ postCommentsId: post.id }))
  ).pipe(tap(console.log));;

  constructor(
    private blogFacade: BlogFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: APIService,
    private fb: FormBuilder
  ) {}

  navigateBack() {
    this.router.navigate(['/']);
  }

  submit() {
    this.post$ = from(this.api.CreateComment(this.commentForm.value)).pipe(
      map(({ post }) => post!)
    ).pipe(tap(console.log));
  }
}
