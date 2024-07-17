import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user = {
    name: 'João Silva',
    company: 'Empresa XYZ',
    role: 'Gerente de Projetos',
    email: 'joao.silva@empresaxyz.com',
    phone: '+258 84 123 4567',
    id: 'USR001',
    location: 'Beira, Moçambique'
  };

  constructor(private alertController: AlertController) {}

  async changePassword() {
    const alert = await this.alertController.create({
      header: 'Trocar Senha',
      inputs: [
        {
          name: 'currentPassword',
          type: 'password',
          placeholder: 'Senha Atual'
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nova Senha'
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirmar Nova Senha'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salvar',
          handler: (data) => {
            this.handlePasswordChange(data);
          }
        }
      ]
    });

    await alert.present();
  }

  handlePasswordChange(data: { currentPassword: string, newPassword: string, confirmPassword: string }) {
    // Aqui você implementaria a lógica para validar e salvar a nova senha
    // Por exemplo:
    if (data.newPassword !== data.confirmPassword) {
      this.showErrorAlert('As senhas não coincidem');
    } else if (data.newPassword.length < 6) {
      this.showErrorAlert('A nova senha deve ter pelo menos 6 caracteres');
    } else {
      // Aqui você chamaria seu serviço de autenticação para atualizar a senha
      console.log('Senha alterada com sucesso');
      this.showSuccessAlert('Senha alterada com sucesso');
    }
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
