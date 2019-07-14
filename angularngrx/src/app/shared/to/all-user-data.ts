import { Participant } from '../model/participant';
import { Message } from '../model/message';
import { Thread } from '../model/thread';

export interface AllUserData {
  participants: Participant[];
  threads: Thread[];
  messages: Message[];
}
