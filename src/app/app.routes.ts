import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Ministries } from './pages/ministries/ministries';
import { Events } from './pages/events/events';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'events', component: Events },
  { path: 'ministries', component: Ministries },
];