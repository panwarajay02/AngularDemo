import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './app.material';
import { ChartsModule } from 'ng2-charts';

import 'hammerjs';
import 'chart.js';


import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputFormComponent } from './input-form/input-form.component';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonMenuService } from './service/person-menu.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ModalAvatarComponent } from './modal-avatar/modal-avatar.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'input-form', component: InputFormComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'card', component: CardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', pathMatch: 'full' , redirectTo: 'menu'},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    HeadComponent,
    FootComponent,
    LoginComponent,
    TabComponent,
    SignupComponent,
    InputFormComponent,
    ErrorPageComponent,
    SideMenuComponent,
    ModalAvatarComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [PersonMenuService],
  entryComponents: [
    ModalAvatarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
