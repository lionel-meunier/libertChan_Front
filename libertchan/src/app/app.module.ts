import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { CatalogModule } from './catalog/catalog.module';
import { StorageModule } from '@ngx-pwa/local-storage';
import { AuthApiService } from './services/auth-api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, HttpInterceptorAuthService } from '@my/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    CatalogModule,
    StorageModule.forRoot({IDBNoWrap: true}),
    AuthModule.forRoot(AuthApiService)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
