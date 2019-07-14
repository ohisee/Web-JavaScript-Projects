import { ApplicationState } from '../../store/application-state';
import { Thread } from '../model/thread';

/**
 * Build thread participants list
 * @param state
 * @param thread
 */
export function buildThreadParticipantsList(
  state: ApplicationState, thread: Thread): string {
  const names = Object.keys(thread.participants).map((participantId: string) =>
    state.storeData.participants[participantId].name
  );
  return names.join(', ');
}
