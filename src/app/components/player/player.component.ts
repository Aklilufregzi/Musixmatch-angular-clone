import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Howl, Howler } from 'howler';
import { Track } from 'src/app/models/artist.model';
import { LyricsService } from 'src/app/services/lyrics.service';
import { SongService } from 'src/app/services/song.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  track: Track;
  duration: number;
  playing;
  current;
  songplaying = false;
  position: number;
  constructor(
    private lyricsService: LyricsService,
    private activatedRoute: ActivatedRoute,
    private songService: SongService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.track = JSON.parse(params.track);
    });
  }

  ngOnInit() {
    if (this.songplaying) {
      this.pausePlay();
    }
    this.playing = new Howl({ src: this.track.src });
    this.songplaying = true;
    this.current = this.playing.play();
    console.log(this.playing._duration);
  }

  pausePlay() {
    console.log(this.playing.id);
    if (this.songplaying) {
      this.songplaying = false;
      this.playing.pause(this.current);
    } else {
      this.songplaying = true;
      this.playing.play();
    }
  }

  next() {
    this.playing.stop();
    let t = this.songService.getTrack(this.track.id + 1);
    console.log(this.songService.getTrack(this.track.id + 1));
    this.playing = new Howl({ src: t.src });
    this.track = t;
    this.playing.play();
  }

  back() {
    this.playing.stop();
    let t = this.songService.getTrack(this.track.id - 1);
    console.log(this.songService.getTrack(this.track.id - 1));
    this.playing = new Howl({ src: t.src });
    this.track = t;
    this.playing.play();
  }

  seek() {}

  sync() {}

  rangeChange(e) {
    this.position = e.target.value;
    this.playing.seek(e.target.value);
  }
}
