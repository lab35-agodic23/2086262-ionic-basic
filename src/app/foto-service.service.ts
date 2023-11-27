import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Foto } from './foto.model';


@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  constructor() { }
 
  public fotos: Foto[] = [];


public async addNewToGallery() {
  const fotoCamara = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

this.fotos.unshift({
      filepath: '',
      webViewPath: fotoCamara.webPath
    })
}
}
