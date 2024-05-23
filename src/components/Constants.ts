/** The public path to my avatar image. */
export const AvatarPath = '/assets/img/Avatar-1.png'

/** The email address used for the Contact Me buttons. */
export const ContactEmail = 'homepage-cta@4lch4.email'

/**
 * An object containing the necessary information to display a link to a social media profile and/or
 * account.
 */
export type SocialMediaLink = {
  /** The label to display what service the account/profile is for. */
  label: string

  /** The URL to the profile/account. */
  href: string

  /** The name of the icon in FontAwesome. */
  icon: string
}

/** A collection of links to my various social media profiles/services.% */
export const SocialMediaLinks: SocialMediaLink[] = [
  { label: 'Twitter', href: 'https://twitter.com/4lch4', icon: 'fa-brands fa-twitter' },
  { label: 'GitHub', href: 'https://github.com/4lch4', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/4lch4', icon: 'fa-brands fa-linkedin' },
  // { label: 'Twitch', href: 'https://twitch.tv/4lch4', icon: 'twitch-logo' },
  // { label: 'CodePen', href: 'https://codepen.io/me', icon: 'codepen-logo' },
  // { label: 'dribbble', href: 'https://dribbble.com/me', icon: 'dribbble-logo' },
  // { label: 'YouTube', href: 'https://www.youtube.com/@me/', icon: 'youtube-logo' },
]
