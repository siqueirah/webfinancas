import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-consulta-contas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consulta-contas.component.html',
  styleUrl: './consulta-contas.component.css'
})
export class ConsultaContasComponent {


  //atributos
  contas: any[] = []; //array de contas


  //método construtor
  constructor(
    private httpClient: HttpClient
  ) { }


  //função executada ao carregar o componente
  ngOnInit() {
    this.httpClient.get(environment.apiFinancas + "/api/contas") //requisição de consulta
      .subscribe({ //aguardando a resposta obtida
        next: (data) => { //capturando a resposta
          this.contas = data as any[]; //armazenando os dados obtidos
        }
      })
  }
}




