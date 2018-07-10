import { DateTime } from "ionic-angular/umd";
import { Moment } from "moment";
import { Input } from "@angular/core";

export class Escala {
    public id: number
    public inicio: DateTime;
    public fim: DateTime;
    public diasDaSemana: Array<Dia> = new Array<Dia>();
    public periodos: Array<Periodo> = Array<Periodo>();
}

export class Dia {
    public id: number;
    public diaDaSemana: DayOfWeek;
    public descricao: string;
}

export enum DayOfWeek {
    sunday = 0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6
}
export class Periodo {
    public id: number;
    public horaInicio: Moment;
    public horaFim: Moment;
}

export class Disponibilidade {
    public id: number;
    public publicador: Publicador;
    public periodo: Periodo;
}

export class Publicador {
    public id: number;
    public nome: string;
}