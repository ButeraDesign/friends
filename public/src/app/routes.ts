import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },

    { path: 'create', component: CreateComponent },
    { path: 'show/:id', component: ShowComponent },
    { path: 'edit/:id', component: EditComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
