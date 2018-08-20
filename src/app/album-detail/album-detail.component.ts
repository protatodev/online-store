import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null;
  existingAlbum: Album = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.albumId = this.route.snapshot.params.id;
      this.existingAlbum = Album.returnMatchingAlbum(this.albumId);
  }

}
