import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { ToastController } from '@ionic/angular';
QuestionServiceService

interface CitiesByProvince {
  [key: string]: string[];
}

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  // survey = {
  //   name: '',
  //   age: null as number | null,
  //   residence: '',
  //   idNumber: '',
  //   province: '',
  //   placeOfBirth: '',
  //   occupation: '',
  //   workplace: '',
  //   maritalStatus: '',
  //   otherOccupation: ''
  // };

  currentQuestions: any[] = [];
  currentPage = 1;
  totalPages = 0;

  // provinces = ['Maputo', 'Gaza', 'Inhambane', 'Manica', 'Sofala', 'Tete', 'Zambézia', 'Nampula', 'Cabo Delgado', 'Niassa'];

  // citiesByProvince: CitiesByProvince = {
  //   'Maputo': ['Matola', 'Boane', 'Namaacha'],
  //   'Gaza': ['Xai-Xai', 'Chókwè', 'Chibuto'],
  //   'Inhambane': ['Inhambane', 'Maxixe', 'Vilanculos'],
    // Adicione mais províncias e cidades conforme necessário
  // };

  // citiesInSelectedProvince: string[] = [];

  constructor(private questionService: QuestionServiceService, private toastController: ToastController) { }

  // onProvinceChange() {
  //   this.citiesInSelectedProvince = this.citiesByProvince[this.survey.province] || [];
  //   this.survey.placeOfBirth = '';
    
  // }

  // onOccupationChange() {
  //   if (this.survey.occupation !== 'outros') {
  //     this.survey.otherOccupation = '';
  //   }
  // }

  ngOnInit() {
    this.loadQuestions();
    this.totalPages = this.questionService.getTotalPages();
  }
  loadQuestions() {
    this.currentQuestions = this.questionService.getQuestions(this.currentPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadQuestions();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadQuestions();
    }
  }

  // onSubmit() {
  //   console.log('Dados do inquérito:', this.survey);
  //   // Aqui você implementaria a lógica para enviar os dados para o servidor
  // }

  isLastPage() {
    return this.currentPage === this.totalPages;
  }

  async submitAnswers() {
    // Aqui você implementaria a lógica para enviar as respostas para o servidor
    // console.log('Respostas:', this.questionService.getAllQuestions());
    
    const toast = await this.toastController.create({
      message: 'Respostas enviadas com sucesso!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
