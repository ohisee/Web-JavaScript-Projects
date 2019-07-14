import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AllUserData } from '../shared/to/all-user-data';
import { SendNewMessageActionPayload } from '../store/actions';
import { commonHttpHeaders } from './commonHttpHeaders';
import { Message } from '../shared/model/message';

@Injectable()
export class ThreadsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * HTTP class
   * @param userId
   * @see {commonHttpHeaders}
   * @returns {Observable<AllUserData>}
   */
  public loadUserThreads(userId: number): Observable<AllUserData> {
    // const headers = new HttpHeaders({ 'userid': userId.toString() });
    return this.httpClient.get<AllUserData>('/api/threads',
      { headers: commonHttpHeaders(userId), responseType: 'json' });
  }

  /**
   * Send new message to server
   * @see {commonHttpHeaders}
   * @param {SendNewMessageActionPayload}
   */
  public saveNewMessage(payload: SendNewMessageActionPayload): Observable<any> {
    return this.httpClient.post(
      `/api/threads/${payload.threadId}`,
      JSON.stringify({ text: payload.text }),
      { headers: commonHttpHeaders(payload.participantId) });
  }

  /**
   * Load new messages for user
   * @param userId
   * @returns {Observable<Message[]>}
   */
  public loadNewMessagesForUser(userId: number): Observable<Message[]> {
    return this.httpClient.post<{ payload: Message[] }>(
      '/api/notifications/messages', null,
      { headers: commonHttpHeaders(userId) }).pipe(map(res => res.payload));
  }

  /**
   * Mark messages as read
   * @param currentUserId
   * @param selectedThreadId
   */
  public markMessagesAsRead(currentUserId: number, selectedThreadId: number): Observable<any> {
    return this.httpClient.patch(`/api/threads/${selectedThreadId}`, { read: true },
      { headers: commonHttpHeaders(currentUserId) });
  }

}
