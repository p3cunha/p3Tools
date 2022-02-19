import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, HostBinding, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { StyleManager } from './shared/style-manager';
import {
  DocsSiteTheme,
  ThemeStorage,
} from './shared/theme-picker/theme-storage/theme-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'p3Tools';
  showFiller = true;

  private _queryParamSubscription = Subscription.EMPTY;
  currentTheme: DocsSiteTheme | undefined;

  // The below colors need to align with the themes defined in theme-picker.scss
  themes: DocsSiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true,
    },
  ];

  // @HostBinding('class') public cssClass: string;
  constructor(
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage,
    private liveAnnouncer: LiveAnnouncer,
    private _activatedRoute: ActivatedRoute,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('theme-example',
    sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/theme-demo-icon.svg'));
    const themeName = this._themeStorage.getStoredThemeName();
    if (themeName) {
      this.selectTheme(themeName);
    } else {
      this.themes.find(themes => {
        if (themes.isDefault === true) {
          this.selectTheme(themes.name);
        }
      });
    }
  }

  ngOnInit(): void {
    this._queryParamSubscription = this._activatedRoute.queryParamMap
    .pipe(map((params: ParamMap) => params.get('theme')))
    .subscribe((themeName: string | null) => {
      if (themeName) {
        this.selectTheme(themeName);
      }
  });
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }

  log(user: any) {
    console.log(user);
  }

  changeColor() {
    // console.log(document.documentElement.style);
    // document.documentElement.style.setProperty('$my-color', '$themePurpleGreen')
    // let body = document.getElementsByTagName('body')[0];
    document.body.className = 'themePurpleGreen';
    // console.log(body);
    // body.classList.add("themePurpleGreen");   //add the class
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000);
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

}
