import {RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path: '', component: ReactiveformComponent},
  {path: 'welcome', component: WelcomepageComponent}
]

export const routing = RouterModule.forRoot(routes);