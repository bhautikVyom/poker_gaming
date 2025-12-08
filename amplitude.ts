'use client';

import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

function initAmplitude() {
  if (typeof window !== 'undefined') {
    amplitude.add(sessionReplayPlugin());
    amplitude.init('34bcf2bf8a98d0bba5a34dcb05ca6713', {"autocapture":true});
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;