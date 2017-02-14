import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { EspressoJournalComponent } from './journals/espresso-journal/espresso-journal.component';
import { FilterJournalComponent } from './journals/filter-journal/filter-journal.component';
import { CoffeeBrewingComponent } from './guides/coffee-brewing/coffee-brewing.component';
import { FoodPreparationComponent } from './guides/food-preparation/food-preparation.component';
import { TeaBrewingComponent } from './guides/tea-brewing/tea-brewing.component';
import { OurCoffeesComponent } from './guides/our-coffees/our-coffees.component';
import { OurTeasComponent } from './guides/our-teas/our-teas.component';
import { ContactsComponent } from './guides/contacts/contacts.component';
import { StocklistComponent } from './stocklist/stocklist.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Heroes List' } },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'espresso-journal', component: EspressoJournalComponent, canActivate: [AuthGuard] },
    { path: 'filter-journal', component: FilterJournalComponent, canActivate: [AuthGuard] },
    { path: 'coffee-brewing', component: CoffeeBrewingComponent, canActivate: [AuthGuard] },
    { path: 'tea-brewing', component: TeaBrewingComponent, canActivate: [AuthGuard] },
    { path: 'food-preparation', component: FoodPreparationComponent, canActivate: [AuthGuard] },
    { path: 'our-coffees', component: OurCoffeesComponent, canActivate: [AuthGuard] },
    { path: 'our-teas', component: OurTeasComponent, canActivate: [AuthGuard] },
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
    { path: 'stocklist', component: StocklistComponent, canActivate: [AuthGuard] },
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
