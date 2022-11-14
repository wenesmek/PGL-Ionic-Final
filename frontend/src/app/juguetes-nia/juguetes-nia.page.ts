import { Component, OnInit } from '@angular/core';
import { JugueteService } from '../services/juguete.service';
import { Storage } from '@ionic/storage';

import { Router } from '@angular/router';

@Component({
  selector: 'app-juguetes-nia',
  templateUrl: './juguetes-nia.page.html',
  styleUrls: ['./juguetes-nia.page.scss'],
})
export class JuguetesNiaPage implements OnInit {


  juguetes: any = [];



  constructor(private jugueteService: JugueteService, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.getAllJuguetes();
  }
  ionViewWillEnter() {
    this.getAllJuguetes();

  }

  async getAllJuguetes() {
    const token = await this.storage.get('token');

    this.jugueteService.getJuguetes(token).subscribe(response =>{
      this.juguetes = response;
    });
  };

  showMenu(id) {
    this.router.navigateByUrl('/juegues-nia-form/' + id);
  };

}
