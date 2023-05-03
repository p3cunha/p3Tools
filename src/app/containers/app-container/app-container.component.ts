import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { User } from 'src/app/models/post.interface';
import { BlogFacade } from 'src/app/store/blog.facade';

@Component({
  selector: 'p3-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppContainerComponent implements OnInit {
  showFiller = true;
  @Input() set user({username, userDataKey, attributes}: User) {
    this.blogFacade.user = {username, userDataKey, attributes};
  }

  @Input() signOut: any;

  constructor(public blogFacade: BlogFacade) {}

  ngOnInit(): void {}

  log(user: any) {
    console.log(user);
  }
}
