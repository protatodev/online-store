import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(id: number) {
    const album: Album = ALBUMS.find(foundAlbum => foundAlbum.id == id);
  
    return album;
  }

}
