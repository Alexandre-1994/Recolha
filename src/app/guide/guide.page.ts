import { Component, OnInit } from '@angular/core';

interface CitiesByProvince {
  [key: string]: string[];
}

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  survey = {
    name: '',
    age: null as number | null,
    residence: '',
    idNumber: '',
    province: '',
    placeOfBirth: '',
    occupation: '',
    workplace: '',
    maritalStatus: '',
    otherOccupation: ''
  };

  provinces = ['Maputo', 'Gaza', 'Inhambane', 'Manica', 'Sofala', 'Tete', 'Zambézia', 'Nampula', 'Cabo Delgado', 'Niassa'];

  citiesByProvince: CitiesByProvince = {
    'Maputo': ['Matola', 'Boane', 'Namaacha'],
    'Gaza': ['Xai-Xai', 'Chókwè', 'Chibuto'],
    'Inhambane': ['Inhambane', 'Maxixe', 'Vilanculos'],
    // Adicione mais províncias e cidades conforme necessário
  };

  citiesInSelectedProvince: string[] = [];

  constructor() { }

  onProvinceChange() {
    this.citiesInSelectedProvince = this.citiesByProvince[this.survey.province] || [];
    this.survey.placeOfBirth = '';
    
  }

  onOccupationChange() {
    if (this.survey.occupation !== 'outros') {
      this.survey.otherOccupation = '';
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Dados do inquérito:', this.survey);
    // Aqui você implementaria a lógica para enviar os dados para o servidor
  }
}
