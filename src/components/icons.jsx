function Icon({ children, className = 'size-[19px]' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export const DiscIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M7.5 9.5a5 5 0 0 1 2-2" />
    <path d="M16.5 14.5a5 5 0 0 1-2 2" />
  </Icon>
);

export const SparkleIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6.5 6.5 2.3 2.3M15.2 15.2l2.3 2.3M17.5 6.5l-2.3 2.3M8.8 15.2l-2.3 2.3" />
  </Icon>
);

export const ShelfIcon = (p) => (
  <Icon {...p}>
    <path d="M3 20.5h18" />
    <path d="M5 20.5V5h3v15.5" />
    <path d="M10 20.5V7h3v13.5" />
    <path d="m15.5 7.6 2.9-.8 3.2 12.6-2.9.8" />
  </Icon>
);

export const PlayerIcon = (p) => (
  <Icon {...p}>
    <circle cx="10" cy="13" r="7.5" />
    <circle cx="10" cy="13" r="1.2" />
    <path d="M19.5 3v8.5l-4 4.5" />
    <circle cx="19.5" cy="3" r="0.6" />
  </Icon>
);

export const TagIcon = (p) => (
  <Icon {...p}>
    <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
    <circle cx="7.5" cy="7.5" r="1.3" />
  </Icon>
);

export const ChevronIcon = (p) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
