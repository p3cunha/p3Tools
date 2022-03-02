import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { PostModule } from '../../components/post/post.module'
import { MatDialogModule } from '@angular/material/dialog';
import { NewPostModule } from '../../components/new-post/new-post.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, PostModule, MatDialogModule, NewPostModule],
})
export class HomeModule {}
