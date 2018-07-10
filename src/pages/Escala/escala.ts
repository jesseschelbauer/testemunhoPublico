import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Escala, Dia, DayOfWeek } from '../../app/models/escala';

@Component({
  selector: 'page-escala',
  templateUrl: 'escala.html',
})
export class EscalaPage {
  
  days: Array<Dia>;
  @Input() public escala : Escala;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(!this.escala)
      this.escala = new Escala();

      this.days = new Array<Dia>();
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.sunday, descricao: "Domingo" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.monday, descricao: "Segunda-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.tuesday, descricao: "Terça-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.wednesday, descricao: "Quarta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.thursday, descricao: "Quinta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.friday, descricao: "Sexta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana : DayOfWeek.saturday, descricao: "Sábado" });

    
  }

  ionViewDidLoad() {
  }

  public addDay(dia:Dia){
    
  }
}
