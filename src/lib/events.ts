// Placeholder for event tracking - can be extended later
export function trackEvent(input: { name: string; properties?: Record<string, any> }) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(input.name, input.properties);
  }
}

