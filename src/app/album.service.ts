import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(id: number) {
    const album: Album = ALBUMS.find(foundAlbum => foundAlbum.id == id);
  
    return album;
  }

}
