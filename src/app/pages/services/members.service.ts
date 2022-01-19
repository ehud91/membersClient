import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { AppConfig } from 'src/app/app.config';
import { Observable } from 'rxjs';
import {Member} from '../../common/models/member';

@Injectable()
export class MembersService {

  private BASE_DOMAIN = environment.MEMBERS_API_BASE_DOMAIN;

  constructor(private http: HttpClient) {     
  }

  getMembers()  {
    return this.http.get(`${this.BASE_DOMAIN}/members`);
  }

}
