import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import localeBr from '@angular/common/locales/pt';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PostDetailsModule { }
