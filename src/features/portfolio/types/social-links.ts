export type SocialLink = {
  /** Icon as React element (inline SVG) */
  icon: React.ReactElement;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
  /** Special handling for Book Meeting link */
  isBookMeeting?: boolean;
};
