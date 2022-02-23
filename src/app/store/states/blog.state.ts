import { GetBlogQuery } from './../../API.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogState {
  private _updating$ = new BehaviorSubject<boolean>(false);
  private _blog$ = new BehaviorSubject<GetBlogQuery | null>(null);

  get isUpdating$() {
    return this._updating$.asObservable().pipe(shareReplay());
  }
  set isUpdating(isUpdating: boolean) {
    this._updating$.next(isUpdating);
  }
  get blog$() {
    return this._blog$.asObservable().pipe(shareReplay());
  }
  get blog(): GetBlogQuery | null {
    return this._blog$.getValue();
  }
  set blog(blog: GetBlogQuery | null) {
    this._blog$.next(blog);
  }
}
