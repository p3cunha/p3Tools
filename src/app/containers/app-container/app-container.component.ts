import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'p3-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppContainerComponent implements OnInit {
  showFiller = true;
  @Input() user: any;
  @Input() signOut: any;

  constructor() { }

  ngOnInit(): void {
  }

  log(user: any) {
    console.log(user);
  }

}
