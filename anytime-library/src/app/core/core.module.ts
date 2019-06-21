import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from '../shared/api.interceptor';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  exports: [
    MainComponent
  ]
})
export class CoreModule { }
