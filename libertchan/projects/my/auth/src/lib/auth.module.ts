import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApi } from './interfaces/auth-api.interface';
import { AuthApiToken } from './services/auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
  static forRoot(Service: Type<AuthApi>): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {provide: AuthApiToken, useClass: Service}
      ]
    };
  }

}
