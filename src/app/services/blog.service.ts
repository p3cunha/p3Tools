import { environment } from 'src/environments/environment';
import { APIService, GetBlogQuery } from 'src/app/API.service';
import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly blogId = environment.blogId;

  constructor(private api: APIService) {}

  getBlog(): Observable<GetBlogQuery> {
    return from(this.api.GetBlog(this.blogId));
  }
}
