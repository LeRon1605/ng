import { Routes } from '@angular/router';
import { BasicLayoutComponent, SideBarLayout } from './shared/layouts';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
      path: 'home',
      component: SideBarLayout,
      loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
      canActivate: [ AuthGuard ]
    },
    {
      path: 'auth',
      component: BasicLayoutComponent,
      loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule),
    },
    {
      path: 'students',
      component: SideBarLayout,
      loadChildren: () => import('./pages/students/student.module').then(x => x.StudentModule),
      canActivate: [ AuthGuard ]
    },
    {
      path: '**',
      redirectTo: 'home'
    }
];