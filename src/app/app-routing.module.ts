import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: '',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'About us',component:AboutusComponent},
  {path:'Contact us',component:ContactusComponent},
  {path:'sign up',component:SignupComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
