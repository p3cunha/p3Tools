import { Post } from './../API.service';
import { PostService } from './../services/post.service';
import { BlogState } from './states/blog.state';
import { BlogService } from './../services/blog.service';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { GetBlogQuery } from '../API.service';
import { PostState } from './states/posts.state';

@Injectable({
  providedIn: 'root',
})
export class BlogFacade {
  get blog$(): Observable<GetBlogQuery | null> {
    return this.blogState.blog$;
  }
  get blog(): GetBlogQuery | null {
    return this.blogState.blog;
  }
  get posts$(): Observable<Post[]> {
    return this.postState.posts$;
  }

  constructor(
    private blogService: BlogService,
    private blogState: BlogState,
    private postState: PostState,
    private postService: PostService
  ) {}

  loadBlog() {
    if (!this.blogState.blog)
      return this.blogService.getBlog().pipe(
        tap(console.log),
        tap((blog) => (this.blogState.blog = blog))
      );
    else return of();
  }

  loadPosts() {
    if (!this.postState.posts.length)
      return this.postService.listPosts().pipe(
        tap(console.log),
        tap((post) => (this.postState.posts = post))
      );
    else return of();
  }
}
