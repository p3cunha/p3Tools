import { APIService } from 'src/app/API.service';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private api: APIService) {}

  getBlog() {
    return from(this.api.GetBlog('9ea4773a-43ba-4e8c-871b-d607a72e6b0f'));
  }
}
