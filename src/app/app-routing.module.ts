import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './pages/burger/burger.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { NavComponent } from './pages/admin/nav/nav.component';
import { ContactsComponent } from './pages/admin/contacts/contacts.component';
import { NewcontactComponent } from './pages/admin/newcontact/newcontact.component';


const routes: Routes = [
    {
      path : "login",
      component : LoginComponent,
    },
    {
      path : "signup",
      component : SignupComponent,
    },
  {
    path : "burger",
    component : BurgerComponent
  },
  {
    path : "menu",
    component : MenuComponent
  },
  {
    path : "nav",
    component : NavComponent
  },
  {
    path : "contacts",
    component : ContactsComponent
  },
  {
    path : "newcontact",
    component : NewcontactComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
