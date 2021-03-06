import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { ParitairCommitee } from './models';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import _ from 'lodash';

@Injectable({providedIn: 'root'})
export class JointcommitteeService {
  private getJointCommiteeUrl = '';

  constructor(private http: HttpClient) { // , private header: HttpHeaders
    if (environment.dataFromAPI_JSON && environment.getJointCommitee !== '') {
      this.getJointCommiteeUrl = environment.boemmAPI + environment.getJointCommitee;
    } else {
      this.getJointCommiteeUrl = 'assets/data/jointcommittee.json';
    }
    console.log('Data From = ' + this.getJointCommiteeUrl);
  }

  public getJointCommitees(): Observable<ParitairCommitee[]> {
    console.log('JointcommitteeService Data From = ' + this.getJointCommiteeUrl);
    const result = this.http.get<ParitairCommitee[]>(this.getJointCommiteeUrl).catch(this.errorHandler);
    console.log(result);
    return result;
  }

  errorHandler(error: HttpErrorResponse) { return Observable.throwError(error.message); }

}
