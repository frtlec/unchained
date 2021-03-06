import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Globalvariable } from "../app_classes/globalvariable";
import { Observable } from "rxjs";
import {
  Achievements,
  AchievementsForAdminPanel
} from "../models/achievements";
import { AchievementsAddEdit } from "../models/achievementsAddEdit";
import { FileUploader } from "ng2-file-upload";
import { AuthService } from "./auth.service";
import { HttpParamsOptions } from "@angular/common/http/src/params";
@Injectable({
  providedIn: "root"
})
export class AchievementsService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}
  path = Globalvariable.apiurl;

  getAchievements(gameid: number): Observable<Achievements[]> {
    return this.httpClient.get<Achievements[]>(
      this.path + "achievements/" + gameid
    );
  }
  getAchievementsForAdminPanel(): Observable<AchievementsForAdminPanel[]> {
    return this.httpClient.get<AchievementsForAdminPanel[]>(
      this.path + "achievements"
    );
  }

  add(item: AchievementsAddEdit): Observable<AchievementsAddEdit[]> {
    let formData: FormData = new FormData();
    for (const prop in item) {
      if (!item.hasOwnProperty(prop)) {
        continue;
      }
      formData.append(prop, item[prop]);
    }
    let headers = new HttpHeaders();
    let bearerToken = "Bearer " + this.authService.token;

    const options = {
      headers: new HttpHeaders({
        Authorization: bearerToken
      })
    };
    //console.log(options);
    return this.httpClient
      .post<AchievementsAddEdit[]>(
        this.path + "achievements/add",
        formData,
        options
      );
  }

  editReturn: boolean;
  edit(item: AchievementsAddEdit) {
    let formData: FormData = new FormData();
    let rs: boolean;
    for (const prop in item) {
      if (!item.hasOwnProperty(prop)) {
        continue;
      }
      formData.append(prop, item[prop]);
    }
    //console.log(item);
    let x = this.httpClient
      .post(this.path + "achievements/update", formData)
      .subscribe(
        data => {
          if (data) {
            alert("Successful update");
          }
        },
        error => {
          alert("Error Message: Fill in the required fields");
        }
      );
  }

  result: boolean = false;
  delete(item: Achievements): boolean {
    this.httpClient.post(this.path + "achievements", item).subscribe(data => {
      this.result = true;
      //console.log(this.result);
      return this.result;
    });
    return this.result;
  }
}
