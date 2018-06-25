import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public GetTasks() {
    return this.http.get(environment.urls.tasks)
      .pipe(
        catchError(err => this.ErrorHandler(err))
      )
  }

  // 
  public PostUpdate(task:number) {
    return this.http.post(environment.urls.update, JSON.stringify(task))
      .pipe(
        catchError(err => this.ErrorHandler(err))
      )
}

  public PostNew(data: string){
    return this.http.post(environment.urls.new, JSON.stringify(data))
      .pipe(
        catchError(err => this.ErrorHandler(err))
      )
}

  private ErrorHandler(error: any) {
    return throwError(error.message || "Server Error");
  }
}
