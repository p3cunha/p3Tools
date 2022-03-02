import { BlogFacade } from 'src/app/store/blog.facade';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core'

import { AppUtils } from 'src/app/core/app-utils'
import { Post } from 'src/app/models/post.interface'

@Component({
  selector: 'p3-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppUtils],
})
export class PostComponent {
  @Input() post!: Post

  constructor(private appUtils: AppUtils, private blogFacade: BlogFacade) {}

  goToPostDetails(id: string) {
    this.appUtils.navigateTo(`postDetails/${id}`)
  }

  deletePost(post: Post) {
    this.blogFacade.deletePost(post).subscribe();
  }
}
