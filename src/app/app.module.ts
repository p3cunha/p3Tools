import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailsModule } from './pages/post-details/post-details.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleManager } from './shared/style-manager';
import { ThemeStorage } from './shared/theme-picker/theme-storage/theme-storage';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './components/navbar/navbar.component';
import { AppContainerModule } from './containers/app-container/app-container.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    PostDetailsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    AppContainerModule
  ],
  providers: [
    StyleManager,
    ThemeStorage
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {}
