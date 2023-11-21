import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './auth.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewJobComponent } from './components/view-job/view-job.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AccountComponent } from './pages/account/account.component';
import { ViewTagComponent } from './pages/view-tag/view-tag.component';

export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'view-job/:id', component: ViewJobComponent},
    {path: 'main/:tag', component: ViewTagComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'access-denied', component: AccessDeniedComponent},
    {path: 'notif', component: NotificationComponent, canActivate : [authGuard]},
    {path: 'messages', component: MessagesComponent, canActivate : [authGuard]},
    {path: 'account', component: AccountComponent, canActivate : [authGuard]},
    {path: '**', component: PageNotFoundComponent},
];
