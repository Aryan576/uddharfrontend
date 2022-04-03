import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'service',component:ServiceComponent,canActivate:[AuthGuard]},
  {path:'contactus',component:ContactusComponent},
  {path:'team',component:TeamComponent},
  {path:'pet-care',component:PetCareComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
