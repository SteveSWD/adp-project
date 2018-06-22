import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatSidenavModule,
        MatButtonModule, MatListModule, MatDialogModule, MatInputModule
      ],
      declarations: [
        AppComponent, ListComponent],
        providers: [ MatCardModule, MatSidenavModule,
        MatButtonModule, MatListModule, MatDialogModule, MatInputModule, HttpClient, HttpHandler
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Task App');
  }));
  it('should render title in a p tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Task App');
  }));
});
