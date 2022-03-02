import { NewPostComponent } from './../../components/new-post/new-post.component'
import { BlogFacade } from 'src/app/store/blog.facade'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { take } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  postList$ = this.blogFacade.posts$

  constructor(private blogFacade: BlogFacade, private dialog: MatDialog) {}

  newPost() {
    this.dialog.open(NewPostComponent)
  }
}
