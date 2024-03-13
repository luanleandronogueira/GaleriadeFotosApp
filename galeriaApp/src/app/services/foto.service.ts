import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public fotos: Foto[] = [];

  constructor() { }


  public async addNewGallery(){

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    
    const webPath = capturedPhoto?.webPath || ''; 

    this.fotos.unshift({

      webviewPath: webPath

    });
  }
 

  public deleteFoto(index: number){

    this.fotos.splice(index, 1);

  }

}

export interface Foto {

  webviewPath: string,
  base64?: string;
  
}