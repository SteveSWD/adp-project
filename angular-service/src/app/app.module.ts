import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent, OverviewDialog } from './menu/menu.component';
import { CompletePipe } from './complete.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuComponent,
    OverviewDialog,
    CompletePipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [OverviewDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
