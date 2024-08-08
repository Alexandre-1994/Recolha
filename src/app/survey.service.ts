import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Network } from '@capacitor/network';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private API_URL = ''; // Substitua pela URL da sua API

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) {
    this.init();
   }
   async init(){
    await this.storage.create();
   }

   async saveSurvey(survey: any) {
    const timestamp = new Date().getTime();
    const key = `survey_${timestamp}`;
    await this.storage.set(key, { ...survey, synced: false, timestamp });
    this.syncSurveys();
  }
  private async syncSurveys() {
    const networkStatus = await Network.getStatus();
    if (networkStatus.connected) {
      const keys = await this.storage.keys();
      const unsyncedSurveys = await Promise.all(
        keys
          .filter(key => key.startsWith('survey_'))
          .map(async key => {
            const survey = await this.storage.get(key);
            return { key, survey };
          })
      );

      for (const { key, survey } of unsyncedSurveys) {
        if (!survey.synced) {
          try {
            await this.http.post(this.API_URL, survey).toPromise();
            await this.storage.set(key, { ...survey, synced: true });
          } catch (error) {
            console.error('Erro ao sincronizar:', error);
          }
        }
      }
    }
  }
  getUnSyncedSurveysCount(): Observable<number> {
    return from(this.storage.keys()).pipe(
      switchMap(keys => from(Promise.all(
        keys
          .filter(key => key.startsWith('survey_'))
          .map(key => this.storage.get(key))
      ))),
      map(surveys => surveys.filter(survey => !survey.synced).length)
    );
  }

  getAllSurveys(): Observable<any[]> {
    return from(this.storage.keys()).pipe(
      switchMap(keys => from(Promise.all(
        keys
          .filter(key => key.startsWith('survey_'))
          .map(key => this.storage.get(key))
      )))
    );
  }
}
