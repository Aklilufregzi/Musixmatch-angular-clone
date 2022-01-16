import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Track } from 'src/app/models/artist.model';
import { SongService } from 'src/app/services/song.service';
import { OptionsComponent } from '../pop/options/options.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  tracks: Track[];
  constructor(
    private ss: SongService,
    private router: Router,
    private popoverController: PopoverController
  ) {}

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

  async options(ev: any) {
    const popover = await this.popoverController.create({
      component: OptionsComponent,
      event: ev,
      translucent: false,
    });

    await popover.present();
  }
}
