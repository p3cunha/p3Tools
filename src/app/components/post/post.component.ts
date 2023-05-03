import { BlogFacade } from 'src/app/store/blog.facade';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { AppUtils } from 'src/app/core/app-utils';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'p3-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppUtils],
})
export class PostComponent {
  @Input() post!: Post;

  get showTrash(): boolean {
    return this.post.author.userDataKey === this.blogFacade.user.userDataKey;
  }

  constructor(private appUtils: AppUtils, private blogFacade: BlogFacade) {}

  goToPostDetails(id: string) {
    this.appUtils.navigateTo(`postDetails/${id}`);
  }

  likePost() {
    this.blogFacade.toggleLikePost(this.post).subscribe();
  }

  verifyLike() {
    return Boolean(
      this.post.likes.find((like) => like === this.blogFacade.user.userDataKey)
    );
  }

  deletePost(post: Post) {
    this.blogFacade.deletePost(post).subscribe();
  }
}
