import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { EverythingComponent } from './pages/everything/everything.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { StoreModule } from '@ngrx/store';
import * as fromNewsState from './state/index';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state';
import { SourcesComponent } from './components/sources/sources.component';
import { PostComponent } from './components/post/post.component';
import { TagsComponent } from './components/tags/tags.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'categories/:category', component: CategoriesComponent },
      { path: 'everything/:query', component: EverythingComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    EverythingComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    NavBarComponent,
    FooterComponent,
    SourcesComponent,
    PostComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('news', fromNewsState.reducer),
    EffectsModule.forFeature(effects),
  ],
  exports: [RouterModule],
})
export class NewsModule {}
