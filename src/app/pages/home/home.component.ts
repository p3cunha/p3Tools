import { BlogFacade } from 'src/app/store/blog.facade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postList$ = this.blogFacade.posts$;

  constructor(private blogFacade: BlogFacade, private router: Router) {}

  ngOnInit(): void {}

  goToPostDetails(id: string) {
    this.router.navigateByUrl(`postDetails/${id}`);
  }

  // createPost(blog: any) {
  //   from(this.api.CreatePost(blog)).subscribe();
  // }

  // deleteBlog(id: string) {
  //   from(this.api.DeleteBlog({ id }))
  //     .subscribe
  //     // () => (this.blogList$ = from(this.api.ListBlogs()).pipe(pluck('items')))
  //     ();
  // }
}
