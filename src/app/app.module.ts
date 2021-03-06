import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsComponent } from './teams/teams.component';
import { StreamVideosComponent } from './home/stream-videos/stream-videos.component';
import { NewsComponent } from './home/news/news.component';
import { CalendarMinComponent } from './home/news/calendar-min/calendar-min.component';
import { FixtureComponent } from './fixture/fixture.component';
import { OurTeamsComponent } from './home/our-teams/our-teams.component';
import { InstagramComponent } from './home/instagram/instagram.component';

import { InstagramService } from './services/instagram.service';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { StreamsComponent } from './streams/streams.component';
import { VideoComponent } from './video/video.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { OthernavComponent } from './othernav/othernav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './app_classes/login.guard';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LeftsidebarComponent } from './admin/leftsidebar/leftsidebar.component';
import { StreamsCtrlComponent } from './admin/streams-ctrl/streams-ctrl.component';
import { SafePipe } from './pipe/safe.pipe';
import { VideosCtrlComponent } from './admin/videos-ctrl/videos-ctrl.component';
import { StreamDetailsComponent } from './home/stream-videos/stream-details/stream-details.component';
import { IconControlPipe } from './pipe/iconControl.pipe';
import { AchievementsComponent } from './achievements/achievements.component';
import { AchievementsCtrlComponent } from './admin/achievements-ctrl/achievements-ctrl.component';
import { AchievementsSearchPipe } from './pipe/AchievementsSearch.pipe';
import { AchievementsFilterByDatePipe } from './pipe/achievementsFilterByDate.pipe';
import { AchievementsFilterByPrizePipe } from './pipe/achievementsFilterByPrize.pipe';
import { ModalComponent } from './admin/modal/modal.component';


import {
   MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatMenuModule,
   MatToolbarModule,
   MatAutocompleteModule,
   MatBadgeModule,
   MatBottomSheetModule,
   MatButtonToggleModule,
   MatCheckboxModule,
   MatChipsModule,
   MatStepperModule,
   MatDatepickerModule,
   MatDividerModule,
   MatExpansionModule,
   MatGridListModule,
   MatInputModule,
   MatListModule,
   MatNativeDateModule,
   MatPaginatorModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatRippleModule,
   MatSelectModule,
   MatSidenavModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatSortModule,
   MatTableModule,
   MatTabsModule,
   MatTooltipModule,
   MatTreeModule,
} from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { AchievementsFilterByGamePipe } from './pipe/achievementsFilterByGame.pipe';
import { IntToactivepassivePipe } from './pipe/intToactivepassive.pipe';
import { SanitizeHtmlPipe } from './pipe/sanitizeHtml.pipe';
import { StreamsHomeComponent } from './home/stream-videos/streamsHome/streamsHome.component';
import { VideosHomeComponent } from './home/stream-videos/videosHome/videosHome.component';
import { VideoDetailsComponent } from './home/stream-videos/video-details/video-details.component';
import { VideoOrderByDescPipe } from './pipe/videoOrderByDesc.pipe';
import { RouterLinkReplacePipe } from './pipe/routerLinkReplace.pipe';
import { RouterLinkUnReplacePipe } from './pipe/RouterLinkUnReplace.pipe';
import { TwitchchannelsCtrlComponent } from './admin/twitchchannels-ctrl/twitchchannels-ctrl.component';
import { ModalfortwitchctrlComponent } from './admin/twitchchannels-ctrl/modalfortwitchctrl/modalfortwitchctrl.component';
import { TwchannelsGameIdToNameConvertPipe } from './pipe/twchannelsGameIdToNameConvert.pipe';
import { TwchannelsPlayerIdToNameConvertPipe } from './pipe/twchannelsPlayerIdToNameConvert.pipe';
import { TwhannelsSearchByUserNamePipe } from './pipe/twhannelsSearchByUserName.pipe';
import { TwchannelsSearchByIdPipe } from './pipe/twchannelsSearchById.pipe';
import { UsersCtrlComponent } from './admin/users-ctrl/users-ctrl.component';
import { ModalforusersctrlComponent } from './admin/users-ctrl/modalforusersctrl/modalforusersctrl.component';
import { ConfirmEqualValidatorDirective } from 'src/shared/confirm-equal-validator.directive';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SliderComponent,
      NavComponent,
      TeamsComponent,
      TeamsComponent,
      StreamVideosComponent,
      NewsComponent,
      AnimateComponent,
      CalendarMinComponent,
      FixtureComponent,
      OurTeamsComponent,
      GalleryComponent,
      InstagramComponent,
      FooterComponent,
      PartnersComponent,
      StreamsComponent,
      VideoComponent,
      AdminComponent,
      LoginComponent,
      OthernavComponent,
      LeftsidebarComponent,
      StreamsCtrlComponent,
      VideosCtrlComponent,
      StreamDetailsComponent,
      AchievementsComponent,
      AchievementsCtrlComponent,
      ModalComponent,
      StreamsHomeComponent,
      VideosHomeComponent,
      VideoDetailsComponent,
      TwitchchannelsCtrlComponent,
      ModalfortwitchctrlComponent,
      UsersCtrlComponent,
      ModalforusersctrlComponent,




      SafePipe,
      IconControlPipe,
      AchievementsSearchPipe,
      AchievementsFilterByDatePipe,
      AchievementsFilterByPrizePipe,
      AchievementsFilterByGamePipe,
      IntToactivepassivePipe,
      SanitizeHtmlPipe,
      VideoOrderByDescPipe,
      RouterLinkReplacePipe,
      RouterLinkUnReplacePipe,
      TwchannelsGameIdToNameConvertPipe,
      TwchannelsPlayerIdToNameConvertPipe,
      TwhannelsSearchByUserNamePipe,
      TwchannelsSearchByIdPipe,


      ConfirmEqualValidatorDirective
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      FormsModule,
      MatToolbarModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      FileUploadModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      A11yModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      PortalModule,
      ScrollingModule
   ],
   exports: [
      A11yModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      PortalModule,
      ScrollingModule,

   ],
   providers: [
      InstagramService,
      LoginGuard,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [ModalComponent, ModalfortwitchctrlComponent, ModalforusersctrlComponent]
})
export class AppModule { }
