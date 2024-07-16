import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-duide',
  templateUrl: './detalhe-duide.page.html',
  styleUrls: ['./detalhe-duide.page.scss'],
})
export class DetalheDuidePage implements OnInit {
  inquerito: any;

  constructor(private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params =>{
      if (params && params['id']){
        this.CarregarDetalheDuide(params['id'])
      }
    });
  }

  CarregarDetalheDuide(id:string){
    this.inquerito={
      id: id,
      nomeRequerente: 'Nome do Requerente',
      dataRealizacao: 'Data de Realização',
      // Outras informações do inquérito
    }
  }

  ngOnInit() {
  }

}
