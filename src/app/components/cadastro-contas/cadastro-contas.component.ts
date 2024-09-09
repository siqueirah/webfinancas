import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-cadastro-contas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cadastro-contas.component.html',
  styleUrl: './cadastro-contas.component.css'
})
export class CadastroContasComponent {


  //atributos
  categorias: any[] = []; //array de categorias


  //método construtor
  constructor(
    private httpClient: HttpClient
  ) {}


  //função executada ao carregar o componente
  ngOnInit() {
    this.httpClient.get(environment.apiFinancas + "/api/categorias")
      .subscribe({
        next: (data) => {
          this.categorias = data as any[];
        }
      })
  }
}




