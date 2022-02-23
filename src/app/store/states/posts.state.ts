import { Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay } from "rxjs";
import { Post } from "src/app/models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostState {
  private _updating$ = new BehaviorSubject<boolean>(false);
  private _posts$ = new BehaviorSubject<Post[]>([]);

  get isUpdating$() {
    return this._updating$.asObservable().pipe(shareReplay());
  }
  set isUpdating(isUpdating: boolean) {
    this._updating$.next(isUpdating);
  }
  get posts$() {
    return this._posts$.asObservable().pipe(shareReplay());
  }
  get posts(): Post[] {
    return this._posts$.getValue();
  }
  set posts(posts: Post[]) {
    this._posts$.next(posts);
  }
}
