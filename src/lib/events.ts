type TrackEventInput = {
  name: string;
  properties?: Record<string, unknown>;
};

type PosthogClient = {
  capture: (name: string, properties?: Record<string, unknown>) => void;
};

// Placeholder for event tracking - can be extended later
export function trackEvent(input: TrackEventInput) {
  if (typeof window === 'undefined') return;

  const w = window as typeof window & { posthog?: PosthogClient };
  if (!w.posthog) return;

  w.posthog.capture(input.name, input.properties);
}

