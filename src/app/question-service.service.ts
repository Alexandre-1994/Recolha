import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private questions: any[] = [
    { id: 1, text: "O que é ação social e qual é seu objetivo principal?", answer: "" },
    { id: 2, text: "Quais são os principais tipos de programas de ação social?", answer: "" },
    { id: 3, text: "Como a ação social pode impactar a redução da pobreza em uma comunidade?", answer: "" },
    { id: 4, text: "Qual é a importância da participação comunitária em projetos de ação social?", answer: "" },
    { id: 5, text: "Como as organizações não governamentais (ONGs) contribuem para a ação social?", answer: "" },
    { id: 6, text: "Quais são os principais desafios enfrentados na implementação de programas de ação social?", answer: "" },
    { id: 7, text: "Como medir a eficácia de um projeto de ação social?", answer: "" },
    { id: 8, text: "Qual é o papel do governo na promoção da ação social?", answer: "" },
    { id: 9, text: "Como a ação social pode ser usada para promover a inclusão social e a igualdade de oportunidades?", answer: "" },
    { id: 10, text: "Quais são os impactos da ação social na educação e capacitação profissional?", answer: "" },
    { id: 11, text: "Como os recursos financeiros são alocados em projetos de ação social?", answer: "" },
    { id: 12, text: "Qual é a relação entre ação social e desenvolvimento sustentável?", answer: "" },
    { id: 13, text: "Como as tecnologias digitais estão transformando a ação social?", answer: "" },
    { id: 14, text: "Quais são os principais indicadores de sucesso para projetos de ação social?", answer: "" },
    { id: 15, text: "Como a ação social pode ser integrada ao setor privado para melhorar resultados?", answer: "" },
    { id: 16, text: "Quais são os principais modelos de financiamento para projetos de ação social?", answer: "" },
    { id: 17, text: "Como os voluntários são recrutados e gerenciados em projetos de ação social?", answer: "" },
    { id: 18, text: "Qual é a importância da transparência e da prestação de contas em projetos de ação social?", answer: "" },
    { id: 19, text: "Como a ação social pode ajudar a enfrentar crises e emergências, como desastres naturais?", answer: "" },
    { id: 20, text: "Quais são os exemplos de ações sociais bem-sucedidas e quais foram os fatores que contribuíram para seu sucesso?", answer: "" }
  ];
  getQuestions(page: number, perPage: number = 5) {
    const start = (page - 1) * perPage;
    return this.questions.slice(start, start + perPage);
  }

  getTotalPages(perPage: number = 5) {
    return Math.ceil(this.questions.length / perPage);
  }
  constructor() { }
}
