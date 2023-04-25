import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BlogFacade } from 'src/app/store/blog.facade';

@Component({
  selector: 'p3-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppContainerComponent implements OnInit {
  showFiller = true;
  @Input() set user(user: any) {
    this.blogFacade.user = user;
    this._user = user;
  }

  _user: any;

  @Input() signOut: any;

  constructor(private blogFacade: BlogFacade) {}

  ngOnInit(): void {}

  log(user: any) {
    console.log(user);
  }
}
