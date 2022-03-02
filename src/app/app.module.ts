import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleManager } from './shared/style-manager';
import { ThemeStorage } from './shared/theme-picker/theme-storage/theme-storage';
import { AppContainerModule } from './containers/app-container/app-container.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

export const BLOG_ID_TOKEN = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    AppContainerModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    StyleManager,
    ThemeStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
