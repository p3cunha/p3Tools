import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, of, pluck } from 'rxjs';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blogList$ = from(this.api.ListBlogs()).pipe(pluck('items'));

  constructor(private api: APIService, private router: Router) {}

  ngOnInit(): void {
    from(this.api.ListBlogs()).pipe(pluck('items')).subscribe(console.log);
    this.createBlog({name: 'igor chupa pica'})
  }

  createBlog(blog: any) {
    from(this.api.CreateBlog(blog)).subscribe();
  }

  goToPostDetails(id: string) {
    this.router.navigateByUrl(`postDetails/${id}`);
  }

  deleteBlog(id: string) {
    from(this.api.DeleteBlog({ id })).subscribe(
      () => (this.blogList$ = from(this.api.ListBlogs()).pipe(pluck('items')))
    );
  }
}
