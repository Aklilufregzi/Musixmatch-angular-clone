import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private ss: SongService) {}

  ngOnInit() {
    this.albums = this.ss.getAlbums();
  }
}
