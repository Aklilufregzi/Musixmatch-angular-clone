import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { MusiclistComponent } from '../components/musiclist/musiclist.component';
import { AlbumsComponent } from './../components/albums/albums.component';
import { TracksComponent } from './../components/tracks/tracks.component';
import { PlaylistsComponent } from './../components/playlists/playlists.component';
import { GenresComponent } from '../components/genres/genres.component';
import { FoldersComponent } from '../components/folders/folders.component';
import { PlayerComponent } from '../components/player/player.component';
import { PlayingComponent } from '../components/playing/playing.component';
import { PlayingModule } from '../components/playing/playing.module';
import { OptionsModule } from '../components/pop/options/options.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PlayingModule,
    OptionsModule,
    HttpClientModule,
  ],
  declarations: [
    HomePageComponent,
    TaskListComponent,
    MusiclistComponent,
    AlbumsComponent,
    TracksComponent,
    PlaylistsComponent,
    GenresComponent,
    FoldersComponent,
    PlayerComponent,
  ],
})
export class HomePageModule {
  constructor() {}
}
