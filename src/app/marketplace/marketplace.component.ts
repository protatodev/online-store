import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service'; 

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  albums: Album[];
  
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  // goToDetailPage(album: Album) {
  //   this.router.navigate(['albums', album.id]);
  // }

}
