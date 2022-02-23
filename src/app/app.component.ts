import { BlogFacade } from './store/blog.facade';
import { Component, InjectionToken, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  blog$ = this.blogFacade.blog$;
  constructor(private blogFacade: BlogFacade) {}

  ngOnInit(): void {
    this.blogFacade.loadBlog().subscribe();
    this.blogFacade.loadPosts().subscribe();
  }
}
