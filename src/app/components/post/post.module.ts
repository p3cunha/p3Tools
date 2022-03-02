import { IconModule } from './../icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    IconModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
