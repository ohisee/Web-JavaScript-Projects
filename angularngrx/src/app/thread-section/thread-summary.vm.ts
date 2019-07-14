/**
 * Thread Summary View Model
 */
export interface ThreadSummaryVM {
  id: number;
  participantNames: string;
  lastMessageText: string;
  timestamp: number;
  read: boolean;
}
