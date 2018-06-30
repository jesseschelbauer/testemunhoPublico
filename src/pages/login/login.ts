import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credencial = { phone: '', password: '', email: '' };
  constructor(public nav: NavController, public navParams: NavParams, private alert: AlertController, private loading: LoadingController, private Api: ApiProvider) {
  }

  ionViewDidLoad() {
  }

  public login() {
    this.Api.login(this.credencial)
      .subscribe(
        user => {
          if (user.authenticated) {
            let loading = this.loading.create({content:"Carregando"});
            loading.setDuration(3000);
            loading.present();
            this.nav.setRoot(TabsPage);
            
          }else{
            let alert = this.alert.create({
              title: 'Login inválido',
              subTitle: `Verifique seu usário e senha`,
              buttons: ['OK']
            });
            alert.present();   
          }
        },
        error => {
          let alert = this.alert.create({
            title: 'Login inválido',
            subTitle: `Verifique seu usário e senha`,
            buttons: ['OK']
          });
          alert.present(); 
        });
  }
}
