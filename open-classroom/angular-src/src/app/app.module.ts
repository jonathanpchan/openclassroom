import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Automatically written in using "ng g component ________" in the components folder
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FindclassroomComponent } from './components/findclassroom/findclassroom.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// jonn-Testing
// import { DropdownComponent } from './components/dropdown/dropdown.component';
// import { UsermanualComponent } from './components/usermanual/usermanual.component';
// import { DevguideComponent } from './components/devguide/devguide.component';
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
  {path:'findclassroom', component: FindclassroomComponent, canActivate:[AuthGuard] },
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  {path:'schedule', component: ScheduleComponent, canActivate:[AuthGuard] },
  //{path:'dropdown', component: DropdownComponent, canActivate:[AuthGuard] },
  //{path:'usermanual', component: UsermanualComponent}

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
// jonn-Testing
     FindclassroomComponent,
//     NavbarComponent,
//     DropdownComponent,
//     UsermanualComponent,
//     DevguideComponent

    NavbarComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, BuildingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
