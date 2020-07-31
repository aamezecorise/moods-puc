import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'moodscamera',
    loadChildren: () => import('./moodscamera/moodscamera.module').then( m => m.MoodscameraPageModule)
  },
  {
    path: 'createfilter',
    loadChildren: () => import('./createfilter/createfilter.module').then( m => m.CreatefilterPageModule)
  },
  {
    path: 'gifmodal',
    loadChildren: () => import('./gifmodal/gifmodal.module').then( m => m.GifmodalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
