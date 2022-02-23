import { APIService } from 'src/app/API.service';
import { Injectable } from '@angular/core';
import { from, pluck } from 'rxjs';
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
    ).pipe(pluck('items'));
  }
}
