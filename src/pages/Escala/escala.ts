import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Escala, Dia, DayOfWeek, Periodo } from '../../app/models/escala';

@Component({
  selector: 'page-escala',
  templateUrl: 'escala.html',
})
export class EscalaPage {

  days: Array<Dia>;
  public periodo: Periodo;

  @Input() public escala: Escala;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (!this.escala)
      this.escala = new Escala();

    this.periodo = new Periodo();

    this.days = new Array<Dia>();
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.sunday, descricao: "Domingo" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.monday, descricao: "Segunda-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.tuesday, descricao: "Terça-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.wednesday, descricao: "Quarta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.thursday, descricao: "Quinta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.friday, descricao: "Sexta-feira" });
    this.days.push(<Dia>{ id: 0, diaDaSemana: DayOfWeek.saturday, descricao: "Sábado" });


  }

  ionViewDidLoad() {
  }

  public addDay(dia: Dia) {

  }

  public addHorario() {
    this.escala.periodos.push(Object.assign({}, this.periodo));
  }

  public removerPeriodo(periodo:Periodo){
    let index = this.escala.periodos.findIndex(p => p.horaInicio == periodo.horaInicio && p.horaFim == periodo.horaFim);
    this.escala.periodos.splice(index,1);
  }
}
