import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss'],
})
export class PlayingComponent implements OnInit {
  constructor(private router: Router) {}

  openPlayer() {
    this.router.navigateByUrl('player');
  }

  ngOnInit() {}
}
