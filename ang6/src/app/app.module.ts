import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AuthenticationService, UserService, ForgotPasswordService,TicketService,
  SettingsService,  NotificationService, OxfordService
  } from './_services';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule,
  MatCheckboxModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSelectModule,
  MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatRadioModule,
  MatProgressSpinnerModule, MatSlideToggleModule, MatSidenavModule,MatSortModule
} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoaderComponent } from './loader/loader.component';
import { RemoveExtension, Url, SortPipe } from './_pipes';
import { SettingsComponent } from './settings/settings.component';
import { OxfordComponent } from './oxford/oxford.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LandingComponent },
      { path: 'users', component: TicketDetailsComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'tickets-details/:ticketId', component: TicketDetailsComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'oxford', component: OxfordComponent },
    ]
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    TicketDetailsComponent,
    TicketsComponent,
    ForgotPasswordComponent,
    MyProfileComponent,
    LoaderComponent,
    RemoveExtension,
    Url,
    SortPipe,
    SettingsComponent,
    OxfordComponent,

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ preventDuplicates: true, positionClass: 'toast-bottom-center', closeButton: true }),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    AuthGuard,AuthenticationService, UserService,ForgotPasswordService,TicketService,SettingsService,
    OxfordService

   ,NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
