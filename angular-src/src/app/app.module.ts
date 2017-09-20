import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';

// Automatically written in using "ng g component ________" in the components folder
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsermanualComponent } from './components/usermanual/usermanual.component';
import { DevguideComponent } from './components/devguide/devguide.component';
import { FindComponent } from './components/find/find.component';

// manually written after using ng g service _______"
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {BuildingsService} from './services/buildings.service';


// Routes for the components (will be protected later)
const appRoutes: Routes = [
  {path:'', component: HomeComponent },
  {path:'register', component: RegisterComponent },
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  {path:'schedule', component: ScheduleComponent, canActivate:[AuthGuard] },
  {path:'usermanual', component: UsermanualComponent},
  {path:'devguide', component: DevguideComponent},
  {path:'findclassroom', component: FindComponent, canActivate:[AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ScheduleComponent,
    UsermanualComponent,
    DevguideComponent,
    NavbarComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NouisliderModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, BuildingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
