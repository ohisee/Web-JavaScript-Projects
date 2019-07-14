import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ThreadsService } from './services/threads.service';
import { reducerMap, metaReducers } from '../app/store/reducerMap';
import { LoadThreadEffectService } from './store/effects/load-thread-effect.service';
import { WriteNewMessageEffectService } from './store/effects/write-new-message-effect.service';
import { ServerNotificationsEffectService } from './store/effects/server-notifications-effect.service';
import { MarkMessagesAsReadEffectService } from './store/effects/mark-messages-as-read-effect.service';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomSerializer } from './store/routerCustomReducer';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { BackdropComponent } from './backdrop/backdrop.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    MessagesComponent,
    HomeComponent,
    AboutComponent,
    ChatMessageComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducerMap, { metaReducers }), // Reducer must be in a map with key and value as reducer or use combinereducers
    RouterModule.forRoot(routes, { useHash: true }),
    EffectsModule.forRoot([
      LoadThreadEffectService,
      WriteNewMessageEffectService,
      ServerNotificationsEffectService,
      MarkMessagesAsReadEffectService
    ]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 60 })
  ],
  providers: [
    ThreadsService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
