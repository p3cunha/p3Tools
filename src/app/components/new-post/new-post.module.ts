import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NewPostComponent } from './new-post.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [NewPostComponent],
  exports: [NewPostComponent],
  imports: [CommonModule, MatInputModule, MatDialogModule, MatButtonModule, ReactiveFormsModule],
})
export class NewPostModule {}
