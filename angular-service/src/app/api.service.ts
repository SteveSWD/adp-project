import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Urls } from './models/endpoints';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTasks() {
    return this.http.get(Urls.tasks)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  // 
  public postUpdate(task:Task) {
    return this.http.post(Urls.update, task)
      .pipe(
        catchError(this.errorHandler)
      )
}

  public postNew(data: any){
    return this.http.post(Urls.new, data)
      .pipe(
        catchError(this.errorHandler)
      )
}

  private errorHandler(error: any) {
    return throwError(error.message || "Server Error");
  }
}
