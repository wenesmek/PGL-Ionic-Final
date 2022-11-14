import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class JugueteService {

  endpoint = 'http://localhost:8080/api/juguetes';

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  getJuguetes(token) {
    const myOptions = this.getOptions(token);
    return this.httpClient.get(this.endpoint, myOptions);
  }

  getJuguete(id, token){
    const myOptions = this.getOptions(token);
    return this.httpClient.get(this.endpoint + '/' + id, myOptions);
  }

  updateJuguete(id, juguete, blob, token){
    const myOptions = this.getOptions(token);

    if(blob){
      const formData = new FormData();
      formData.append('nombre', juguete.nombre);
      formData.append('descripcion', juguete.descripcion);
      formData.append('file', blob);
      return this.httpClient.put(this.endpoint + '/' + id, formData, myOptions);
    }
    return this.httpClient.put(this.endpoint + '/' + id, juguete, myOptions);
  }

  deleteJuguete(id, token){
    const myOptions = this.getOptions(token);

    return this.httpClient.delete(this.endpoint + '/' + id, myOptions);
  }

  createJuguete(juguete, blob, token){
    const myOptions = this.getOptions(token);

    const formData = new FormData();
    formData.append('nombre', juguete.nombre);
    formData.append('descripcion', juguete.descripcion);
    formData.append('file', blob);
    return this.httpClient.post(this.endpoint, formData, myOptions);

  }

  private getOptions(token){

    const bearerAccess = 'Bearer ' + token;

    const options = {
      headers: {
        'Authorization' : bearerAccess,
        // 'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }
}
