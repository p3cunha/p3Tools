import { Post } from './../API.service'
import { PostService } from './../services/post.service'
import { BlogState } from './states/blog.state'
import { BlogService } from './../services/blog.service'
import { Injectable } from '@angular/core'
import {
  catchError,
  finalize,
  mergeMap,
  Observable,
  of,
  take,
  takeUntil,
  tap,
} from 'rxjs'
import { GetBlogQuery } from '../API.service'
import { PostState } from './states/posts.state'

@Injectable({
  providedIn: 'root',
})
export class BlogFacade {
  public user: any;

  get blog$(): Observable<GetBlogQuery | null> {
    return this.blogState.blog$
  }
  get blog(): GetBlogQuery | null {
    return this.blogState.blog
  }
  get posts$(): Observable<Post[]> {
    return this.postState.posts$
  }

  constructor(
    private blogService: BlogService,
    private blogState: BlogState,
    private postState: PostState,
    private postService: PostService,
  ) {}

  loadBlog() {
    if (!this.blogState.blog)
      return this.blogService.getBlog().pipe(
        tap(console.log),
        tap((blog) => (this.blogState.blog = blog)),
      )
    else return of()
  }

  loadPosts() {
    if (!this.postState.posts.length)
      return this.postService.listPosts().pipe(
        tap(console.log),
        tap((post) => (this.postState.posts = post)),
      )
    else return of()
  }

  creatPost(post: Post) {
    return this.postService.createPost(post).pipe(
      take(1),
      tap((alertaRes) => {
        this.postState.isUpdating = true
        this.postState.createPost(alertaRes)
      }),
      catchError((err) => {
        console.log(err)
        return of(this.postState.deletePost(post))
      }),
      finalize(() => (this.postState.isUpdating = false)),
    )
    /**@todo */
    // .subscribe((alertaAtualizado: Todo) => {
    //   // callback de sucesso - nós temos o id gerado pelo servidor, vamos atualizar o estado
    //   // this.todosState.updateAlertaId(alerta, alertaAtualizado);
    // });
  }

  deletePost(post: Post) {
    const deletedIndex = this.postState.posts.indexOf(post)
    // this.showSnackBar.next();
    this.postState.deletePost(post)
    return of(post).pipe(
      take(1),
      // delay(6000),
      // takeUntil(
      //   this.cancelDelete$.pipe(
      //     take(1),
      //     tap(() => this.todosState.putTodoBack(post, deletedIndex))
      //   )
      // ),
      mergeMap(() =>
        this.postService.deletePost(post.id!).pipe(
          catchError((err) => {
            console.log(err)
            this.postState.putPostBack(post, deletedIndex)
            return of()
          }),
        ),
      ),
    )
  }
}
