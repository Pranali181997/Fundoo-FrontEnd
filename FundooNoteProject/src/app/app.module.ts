import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { IconsComponent } from './component/icons/icons.component';
import { DisplayComponent } from './component/display/display.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component'; 
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './component/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatMenuModule} from '@angular/material/menu';
import { AuthguardServiceService } from './Services/authGuard/authguard-service.service';
import{ MatTooltipModule} from '@angular/material/tooltip';
import {Routes, RouterModule } from '@angular/router'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    DashBoardComponent,
    GetAllNotesComponent,
    IconsComponent,
    DisplayComponent,
    CreateNoteComponent,
    ArchiveComponent,
    TrashComponent,
    UpdateComponent,
    FilterPipe,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
