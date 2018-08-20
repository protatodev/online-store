import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  albums: Album[] = Album.albums;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goToDetailPage(album: Album) {
  //   this.router.navigate(['albums', album.id]);
  // }

}
