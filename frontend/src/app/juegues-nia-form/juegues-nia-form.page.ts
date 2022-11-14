import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from "@ionic/angular";

import {Storage} from "@ionic/storage";

import {JugueteService} from '../services/juguete.service';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-juegues-nia-form',
  templateUrl: './juegues-nia-form.page.html',
  styleUrls: ['./juegues-nia-form.page.scss'],
})
export class JueguesNiaFormPage implements OnInit {

  id: any = null;
  capturedPhoto = '';

  juguete: any = {
    id: null,
    nombre: '',
    descripcion: '',
    filename: '',
  };

  handlerMessage: any = '';
  roleMessage: any = '';


  constructor(
    private activeRoute: ActivatedRoute,
    private jugueteService: JugueteService,
    private router: Router,
    private photoService: PhotoService,
    private storage: Storage,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;

      this.juguete.reset

      if (this.id !== '0') {
        this.getJuguete();
      }

    });
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }


  async getJuguete() {
    const token = await this.storage.get('token');

    this.jugueteService.getJuguete(this.id, token).subscribe(response => {
      this.juguete = response;
      this.id = this.juguete.id;
      this.capturedPhoto = this.juguete.filename !== '' ? 'http://localhost:8080/images/' + this.juguete.filename : '';

    });
  }

  async updateJuguete() {

    const role = await this.handleConfirm('¿Quiere actualizar el juguete?');


    if(role == 'confirm'){
      const token = await this.storage.get('token');

      let blob = null;
      if ((this.capturedPhoto !== 'http://localhost:8080/images/' + this.juguete.filename) && this.capturedPhoto !== null) {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      } else if (this.capturedPhoto === null) {
        this.juguete.filename = '';
      }
      this.jugueteService.updateJuguete(this.juguete.id, this.juguete, blob, token).subscribe(response => {
        this.getJuguete();
      });
    }else{
      await this.getJuguete();
    }
  }

  async deleteJuguete() {

    const role = await this.handleConfirm('¿Quiere eliminar el juguete?')

    if(role == 'confirm'){
      const token = await this.storage.get('token');

      this.jugueteService.deleteJuguete(this.id, token).subscribe(response => {
        this.router.navigateByUrl('/juguetes-nia');
      });
    }


  }

  async createJuguete() {
    const token = await this.storage.get('token');

    let blob = null;
    if (this.capturedPhoto !== '') {
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }
    this.jugueteService.createJuguete(
      {
        nombre: this.juguete.nombre,
        descripcion: this.juguete.descripcion
      }, blob, token).subscribe(response => {

      this.router.navigateByUrl('/juguetes-nia');
    });


  }

  private async handleConfirm(msg) {

    const alert = await this.alertController.create({
      header: msg,
      buttons: [

        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Actualización cancelada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Actualizado'
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    return role;
  }
}
