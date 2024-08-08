import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './pages/burger/burger.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { NavComponent } from './pages/admin/nav/nav.component';
import { ContactsComponent } from './pages/admin/contacts/contacts.component';
import { NewcontactComponent } from './pages/admin/newcontact/newcontact.component';
import { ListcommandeComponent } from './pages/admin/listcommande/listcommande.component';
import { UpdateBurgerComponent } from './pages/admin/update-burger/update-burger.component';
import { Burger1Component } from './pages/admin/burger1/burger1.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { Login1Component } from './pages/admin/login1/login1.component';
import { Commande1Component } from './pages/admin/commande1/commande1.component';
import { CommandeListComponent } from './components/commande-list/commande-list.component';
import { CommandeFormComponent } from './components/commande-form/commande-form.component';
import { CommandeEditComponent } from './components/commande-edit/commande-edit.component';
import { BurgerListComponent } from './pages/burger-list/burger-list.component';
import { AddBurgerComponent } from './pages/admin/add-burger/add-burger.component';
import { BurgerEditComponent } from './components/burger-edit/burger-edit.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RestoreBurgerComponent } from './pages/admin/restore-burger/restore-burger.component';
import { SuccessComponent } from './pages/admin/success/success.component';


const routes: Routes = [
    {
      path : "login",
      component : LoginComponent,
    },
    {
      path : "listcommande",
      component : ListcommandeComponent,
    },
    { path: 'welcome', component: WelcomeComponent },
    {
      path : "signup",
      component : SignupComponent,
    },
    {
      path : "register",
      component : RegisterComponent,
    },
    {
      path : "login1",
      component : Login1Component,
    },
    { path: 'burgers', component: BurgerListComponent },
    { path: 'add-burger', component: AddBurgerComponent },
    { path: 'update-burger/:id', component: UpdateBurgerComponent },
  {
    path : "burger",
    component : BurgerComponent
  },
 // { path: 'contacts/update-burger/:id', component: UpdateBurgerComponent },

  { path: 'burgers/edit/:id', component: BurgerEditComponent },
  {
    path : "menu",
    component : MenuComponent
  },
  {
    path : "restore",
    component : RestoreBurgerComponent
  },
  { path: 'commandes', component: CommandeListComponent },
  { path: 'commande/:burgerId', component: CommandeFormComponent },
  { path: 'commande/edit/:id', component: CommandeEditComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path : "commande1",
    component : Commande1Component
  },
  {
    path : "nav",
    component : NavComponent
  },
  {
    path : "listburger",
    component : ContactsComponent
  },
  {
    path : "ajoutburger",
    component : NewcontactComponent
  },
  {
    path : "updateBurger/:id",
    component : NewcontactComponent
  },
  {
    path : "connexion",
    component : ConnexionComponent
  },
  {
    path : "sta",
    component : StatisticsComponent
  },
  {
    path : "burger1",
    component : Burger1Component
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
