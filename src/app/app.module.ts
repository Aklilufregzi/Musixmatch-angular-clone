import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { RootComponent } from './components/root/root.component';
import { MusicComponent } from './components/tabs/music/music.component';
import { SearchComponent } from './components/tabs/search/search.component';
import { IdentifyComponent } from './components/tabs/identify/identify.component';
import { HometextComponent } from './components/hometext/hometext.component';
import { AlbumComponent } from './components/album/album.component';
@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MusicComponent,
    SearchComponent,
    IdentifyComponent,
    HometextComponent,
    AlbumComponent,
  ],
  entryComponents: [],
  imports: [
    HomePageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
