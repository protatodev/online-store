import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null;
  existingAlbum: Album = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
      this.albumId = this.route.snapshot.params.id;
      //this.existingAlbum = this.albumService.getAlbumById(this.albumId);
  }

}
