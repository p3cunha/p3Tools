import { Post } from './../models/post.interface';
import { APIService } from 'src/app/API.service';
import { Injectable } from '@angular/core';
import { Observable, from, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly blogId = environment.blogId;

  constructor(private api: APIService) {}

  listPosts() {
    return from(
      this.api.ListPosts({
        blogPostsId: { beginsWith: this.blogId },
      })
    ).pipe(pluck('items')) as unknown as Observable<Post>;
  }

  createPost(post: Post) {
    return from(this.api.CreatePost(post))  as unknown as Observable<Post>;
  }

  updatePost(updatedFields: any) {
    return from(this.api.UpdatePost({ ...updatedFields })) as unknown as Observable<Post>;
  }

  deletePost(id: string) {
    return from(this.api.DeletePost({ id })) as unknown as Observable<Post>;
  }
}
