import { IconModule } from './../icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ParsePipe } from 'src/app/directives/parse.directive';
import { GetLengthPipe } from 'src/app/directives/getLength.directive';

@NgModule({
  declarations: [
    PostComponent,
    ParsePipe,
    GetLengthPipe
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
