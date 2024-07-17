import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  inqueritos = [
    { nomeRequerente: 'João da Silva', dataRealizacao: '2023-05-12' },
    { nomeRequerente: 'Maria Souza', dataRealizacao: '2023-04-28' },
    { nomeRequerente: 'Pedro Almeida', dataRealizacao: '2023-03-15' }
    // Adicione quantos inquéritos forem necessários
  ];

  constructor(private navCtrl: NavController, private router: Router) {}

  onFabClick() {
    console.log('Floating Action Button clicked!');
    // Adicione aqui a lógica que você quer executar quando o botão for clicado
  }

  verDetalhesInquerito(inquerito: { nomeRequerente: string; dataRealizacao: string }) {
    this.router.navigate(['/detalhes-duide', { id: inquerito }]);
  }

  // Função para obter as iniciais do nome do requerente
  getIniciais(nome: string): string {
    const partesNome = nome.split(' ');
    let iniciais = '';
    partesNome.forEach(part => {
      if (part.length > 0) {
        iniciais += part[0];
      }
    });
    return iniciais.toUpperCase(); // Retorna as iniciais em maiúsculo
  }
  goToGuidePage() {
    this.navCtrl.navigateForward('/guide');
  }

}
