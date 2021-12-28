import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Track } from 'src/app/models/artist.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  tracks: Track[];
  constructor(private ss: SongService, private router: Router) {}

  ngOnInit() {
    this.tracks = this.ss.getTracks();
  }

  play(track: Track) {
    console.log(track);

    let extra: NavigationExtras = {
      queryParams: {
        track: JSON.stringify(track),
      },
    };

    this.router.navigate(['player'], extra);
  }
}
