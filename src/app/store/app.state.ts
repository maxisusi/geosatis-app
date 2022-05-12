import { IndexState } from './state/index/index.reducer';
import { OffenderState } from './state/offenders/offenders.reducer';

export interface AppState {
  offenders: OffenderState;
  index: IndexState;
}
