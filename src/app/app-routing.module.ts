import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { HometextComponent } from './components/hometext/hometext.component';
import { PlayerComponent } from './components/player/player.component';
import { RootComponent } from './components/root/root.component';
import { IdentifyComponent } from './components/tabs/identify/identify.component';
import { MusicComponent } from './components/tabs/music/music.component';
import { SearchComponent } from './components/tabs/search/search.component';
import { HomePageComponent } from './home/home.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'root/music',
    pathMatch: 'full',
  },

  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'root',
    component: RootComponent,
    children: [
      {
        path: 'home',
        component: HometextComponent,
      },
      {
        path: 'music',
        component: HomePageComponent,
      },

      {
        path: 'identify',
        component: IdentifyComponent,
      },
    ],
  },

  {
    path: 'album/:id',
    component: AlbumComponent,
  },

  {
    path: 'player',
    component: PlayerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
