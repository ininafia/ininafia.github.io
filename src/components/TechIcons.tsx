interface IconProps {
  size?: number | string;
  className?: string;
}

// 1. HTML5 Official Orange Shield
export function HtmlIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#E44D26" />
      <path d="M12 3.8V19.4L16.8 18.1L18.3 3.8H12Z" fill="#F16529" />
      <path d="M12 7.7H8.5L8.7 10.3H12V12.9H8.9L9.2 15.6L12 16.4V19L7.5 17.8L7.1 6.1H12V7.7Z" fill="#EBEBEB" />
      <path d="M12 7.7H15.5L15.2 11.3H12V12.9H15.1L14.7 16.4L12 17.1V19L16.5 17.8L16.9 6.1H12V7.7Z" fill="#FFFFFF" />
    </svg>
  );
}

// 2. CSS3 Official Blue Shield
export function CssIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#1572B6" />
      <path d="M12 3.8V19.4L16.8 18.1L18.3 3.8H12Z" fill="#33A9DC" />
      <path d="M12 7.7H8.5L8.7 10.3H12V12.9H8.9L9.2 15.6L12 16.4V19L7.5 17.8L7.1 6.1H12V7.7Z" fill="#EBEBEB" />
      <path d="M12 7.7H15.5L15.1 12.9H12V14.5H14.7L14.5 16.4L12 17.1V19L16.5 17.8L16.9 6.1H12V7.7Z" fill="#FFFFFF" />
    </svg>
  );
}

// 3. JavaScript Official Yellow Square with JS
export function JavascriptIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7 17.5C7.8 18.5 8.9 19 10.3 19C12.3 19 13.5 17.8 13.5 15.5V9H11.2V15.5C11.2 16.6 10.7 17.1 9.9 17.1C9.2 17.1 8.6 16.7 8.1 16.1L7 17.5Z"
        fill="#000000"
      />
      <path
        d="M14.5 17.6C15.3 18.5 16.6 19 18.1 19C20.6 19 22 17.6 22 15.4C22 13.4 20.8 12.4 19 11.6L18.3 11.3C17.3 10.9 16.7 10.4 16.7 9.6C16.7 8.8 17.4 8.2 18.3 8.2C19.1 8.2 19.7 8.5 20.2 9.1L21.4 7.6C20.6 6.7 19.5 6.2 18.2 6.2C15.9 6.2 14.5 7.6 14.5 9.7C14.5 11.6 15.6 12.6 17.4 13.4L18.1 13.7C19.3 14.2 19.8 14.8 19.8 15.6C19.8 16.5 19 17.1 18 17.1C17 17.1 16.1 16.5 15.5 15.7L14.5 17.6Z"
        fill="#000000"
      />
    </svg>
  );
}

// 4. TypeScript Official Blue Square with TS
export function TypescriptIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M4 8.5H12V10.5H9.2V18.5H6.8V10.5H4V8.5Z" fill="#FFFFFF" />
      <path
        d="M13.2 17.2C13.9 18.1 15.1 18.6 16.5 18.6C18.8 18.6 20 17.3 20 15.3C20 13.5 18.9 12.6 17.2 11.9L16.6 11.6C15.7 11.2 15.2 10.8 15.2 10.1C15.2 9.4 15.8 8.9 16.6 8.9C17.3 8.9 17.9 9.2 18.3 9.7L19.5 8.3C18.8 7.5 17.8 7 16.6 7C14.5 7 13.2 8.3 13.2 10.2C13.2 11.9 14.2 12.8 15.8 13.5L16.4 13.8C17.5 14.3 18 14.8 18 15.5C18 16.3 17.3 16.8 16.4 16.8C15.5 16.8 14.7 16.3 14.1 15.5L13.2 17.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 5. Python Official Dual Snake Logo
export function PythonIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5V5.1H12.1V5.6H5.2C5.2 5.6 2 5.2 2 8.8C2 12.4 4.8 12.2 4.8 12.2H6.4V10.5C6.4 8.6 8.1 8.6 8.1 8.6H12C13.8 8.6 13.8 6.9 13.8 6.9V3.5C13.8 3.5 14.1 2 11.9 2ZM10.2 3.6C10.7 3.6 11.1 4 11.1 4.5C11.1 5 10.7 5.4 10.2 5.4C9.7 5.4 9.3 5 9.3 4.5C9.3 4 9.7 3.6 10.2 3.6Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22C15.7 22 15.5 20.5 15.5 20.5V18.9H11.9V18.4H18.8C18.8 18.4 22 18.8 22 15.2C22 11.6 19.2 11.8 19.2 11.8H17.6V13.5C17.6 15.4 15.9 15.4 15.9 15.4H12C10.2 15.4 10.2 17.1 10.2 17.1V20.5C10.2 20.5 9.9 22 12.1 22ZM13.8 20.4C13.3 20.4 12.9 20 12.9 19.5C12.9 19 13.3 18.6 13.8 18.6C14.3 18.6 14.7 19 14.7 19.5C14.7 20 14.3 20.4 13.8 20.4Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

// 6. PHP Official Purple Oval
export function PhpIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4" />
      <path
        d="M6.2 14.5L7.3 9.5H9.2C10.4 9.5 11.1 10.1 10.8 11.3C10.6 12.2 9.9 12.7 8.9 12.7H7.7L7.3 14.5H6.2ZM7.9 11.7H8.7C9.3 11.7 9.7 11.4 9.8 10.9C9.9 10.4 9.6 10.2 9.1 10.2H8.3L7.9 11.7Z"
        fill="#FFFFFF"
      />
      <path
        d="M10.8 14.5L11.9 9.5H13.1L12.7 11.3H14.1C15.1 11.3 15.4 11.8 15.2 12.7L14.8 14.5H13.6L14 12.8C14.1 12.4 13.9 12.2 13.5 12.2H12.5L12 14.5H10.8Z"
        fill="#FFFFFF"
      />
      <path
        d="M15.4 14.5L16.5 9.5H18.4C19.6 9.5 20.3 10.1 20 11.3C19.8 12.2 19.1 12.7 18.1 12.7H16.9L16.5 14.5H15.4ZM17.1 11.7H17.9C18.5 11.7 18.9 11.4 19 10.9C19.1 10.4 18.8 10.2 18.3 10.2H17.5L17.1 11.7Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 7. React Official Cyan Atom
export function ReactIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        transform="rotate(60 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        transform="rotate(120 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// 8. Bootstrap Official Purple Squircle
export function BootstrapIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path
        d="M8 6H13.2C14.8 6 16.2 6.8 16.2 8.4C16.2 9.5 15.5 10.4 14.4 10.8C15.8 11.2 16.7 12.3 16.7 13.7C16.7 15.6 15 16.5 13.1 16.5H8V6ZM10.5 8.1V10.2H12.7C13.5 10.2 14.1 9.8 14.1 9.1C14.1 8.4 13.5 8.1 12.7 8.1H10.5ZM10.5 12.2V14.5H13C13.9 14.5 14.6 14 14.6 13.3C14.6 12.6 13.9 12.2 13 12.2H10.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 9. Laravel Official Red/Coral Emblem
export function LaravelIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20.5 8.5L16.2 6L11.9 8.5L16.2 11L20.5 8.5ZM11.1 9L6.8 6.5L2.5 9L6.8 11.5L11.1 9ZM16.2 12.1L12.5 10L8.2 12.5L11.9 14.6L16.2 12.1ZM21 9.4L16.8 11.8V17L21 14.5V9.4ZM15.8 17.5V12.4L12.5 14.3V19.4L15.8 17.5ZM11.5 19.4V14.3L7.2 11.8V17L11.5 19.4ZM6.2 11.8L2 9.4V14.5L6.2 17V11.8Z"
        fill="#FF2D20"
      />
    </svg>
  );
}

// 10. Node.js Official Green Hexagon
export function NodejsIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
        fill="#339933"
      />
      <path
        d="M12 4.2L18.8 8.1V15.9L12 19.8L5.2 15.9V8.1L12 4.2Z"
        fill="#215732"
      />
      <path
        d="M12 6.5L16.5 9.1V14.9L12 17.5L7.5 14.9V9.1L12 6.5Z"
        fill="#5FA04E"
      />
    </svg>
  );
}

// 11. REST API / Cloud API Icon
export function ApiIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#0284C7" />
      <path
        d="M6 13.5L8.5 8H10L12.5 13.5H11.1L10.5 12H8L7.4 13.5H6ZM8.4 10.9H10.1L9.3 9L8.4 10.9ZM13.5 13.5V8H16.2C17.3 8 18 8.7 18 9.7C18 10.8 17.3 11.4 16.2 11.4H14.7V13.5H13.5ZM14.7 10.4H16.1C16.6 10.4 16.9 10.1 16.9 9.7C16.9 9.3 16.6 9 16.1 9H14.7V10.4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 12. MySQL Official Dolphin / Modern DB
export function MysqlIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#00758F" />
      <path
        d="M6.5 17V12.8L9.2 17H10.5L13.2 12.8V17H14.5V9.5H13.2L10 14.5L6.8 9.5H5.5V17H6.5ZM18.5 14.8C18.5 16.2 17.4 17.2 15.8 17.2C15.1 17.2 14.5 16.9 14 16.4L14.7 15.4C15 15.8 15.4 16 15.8 16C16.6 16 17.2 15.5 17.2 14.7V9.5H18.5V14.8Z"
        fill="#FFFFFF"
      />
      <circle cx="19" cy="8" r="2" fill="#F29111" />
    </svg>
  );
}

// 13. PostgreSQL Official Royal Blue Elephant Logo
export function PostgresqlIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#4169E1" />
      <path
        d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4ZM15.5 15.5C14.8 16.5 13.5 17.2 12 17.2C9.5 17.2 7.8 15.5 7.8 13C7.8 10.5 9.5 8.8 12 8.8C13.5 8.8 14.8 9.5 15.5 10.5L14.2 11.5C13.8 10.8 13 10.2 12 10.2C10.4 10.2 9.4 11.4 9.4 13C9.4 14.6 10.4 15.8 12 15.8C13 15.8 13.8 15.2 14.2 14.5L15.5 15.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 14. Git Official Orange-Red Diamond
export function GitIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.6 10.7L13.3 2.4C12.8 1.9 12 1.9 11.5 2.4L9.8 4.1L11.9 6.2C12.4 6 13 6.1 13.4 6.5C13.9 7 14 7.7 13.7 8.3L15.7 10.3C16.3 10 17 10.1 17.5 10.6C18.1 11.2 18.1 12.1 17.5 12.7C16.9 13.3 16 13.3 15.4 12.7C15 12.3 14.8 11.6 15.1 11.1L13.2 9.2V14.4C13.5 14.6 13.8 15 13.8 15.5C13.8 16.3 13.1 17 12.3 17C11.5 17 10.8 16.3 10.8 15.5C10.8 14.9 11.2 14.4 11.7 14.2V9C11.2 8.8 10.8 8.3 10.8 7.7C10.8 7.3 11 6.9 11.3 6.6L9.3 4.6L2.4 11.5C1.9 12 1.9 12.8 2.4 13.3L10.7 21.6C11.2 22.1 12 22.1 12.5 21.6L21.6 12.5C22.1 12 22.1 11.2 21.6 10.7Z"
        fill="#F05032"
      />
    </svg>
  );
}

// 15. GitHub Official Octocat
export function GithubIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#24292E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.6 4 4 7.6 4 12C4 15.5 6.3 18.5 9.5 19.6C9.9 19.7 10 19.4 10 19.2V17.8C7.8 18.3 7.3 16.8 7.3 16.8C6.9 15.8 6.4 15.6 6.4 15.6C5.7 15.1 6.4 15.1 6.4 15.1C7.2 15.2 7.6 15.9 7.6 15.9C8.3 17.1 9.5 16.8 9.9 16.6C10 16.1 10.2 15.7 10.4 15.5C8.6 15.3 6.7 14.6 6.7 11.5C6.7 10.6 7 9.9 7.5 9.3C7.4 9.1 7.1 8.2 7.6 7.2C7.6 7.2 8.3 7 9.9 8C10.6 7.8 11.3 7.7 12 7.7C12.7 7.7 13.4 7.8 14.1 8C15.7 7 16.4 7.2 16.4 7.2C16.9 8.2 16.6 9.1 16.5 9.3C17 9.9 17.3 10.6 17.3 11.5C17.3 14.6 15.4 15.3 13.6 15.5C13.9 15.8 14.1 16.3 14.1 17V19.2C14.1 19.4 14.3 19.7 14.7 19.6C17.8 18.5 20 15.5 20 12C20 7.6 16.4 4 12 4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 16. VS Code Official Origami Ribbon Logo
export function VscodeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17.8 2.2L12.5 7.1L7.5 3.3L5.3 4.5V19.5L7.5 20.7L12.5 16.9L17.8 21.8L21.5 20V4L17.8 2.2ZM7.5 16.2V7.8L11.5 12L7.5 16.2ZM17.8 16.8L13.8 12L17.8 7.2V16.8Z"
        fill="#007ACC"
      />
    </svg>
  );
}

// 17. Figma Official Multi-color Logo
export function FigmaIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 2H12V6H8C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z" fill="#F24E1E" />
      <path d="M12 2H16C17.1 2 18 2.9 18 4C18 5.1 17.1 6 16 6H12V2Z" fill="#FF7262" />
      <path d="M8 6H12V10H8C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6Z" fill="#A259FF" />
      <circle cx="14" cy="8" r="2" fill="#1ABCFE" />
      <path d="M8 10H12V14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14V10Z" fill="#0ACF83" />
    </svg>
  );
}

// 18. Tailwind CSS Official Cyan Wave Mark
export function TailwindIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C6.336 13.382 4.975 12 2.001 12h4z"
        fill="#06B6D4"
      />
    </svg>
  );
}

// 19. Antigravity IDE (Agentic AI Coding Environment)
export function AntigravityIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="agyGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="#0F172A" />
      <circle cx="12" cy="12" r="7" stroke="url(#agyGrad)" strokeWidth="1.8" strokeDasharray="3 2" />
      <path d="M12 5.5L16.5 14H7.5L12 5.5Z" fill="url(#agyGrad)" />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
      <path d="M8 18.5H16" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 20. Microsoft Office Official Emblem
export function MicrosoftOfficeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#EB3C00" />
      <path d="M14.5 4.5L19 7V17L14.5 19.5V4.5Z" fill="#FFA500" />
      <path d="M9.5 7L14.5 4.5V19.5L9.5 17V7Z" fill="#F25022" />
      <path d="M5 8.5L9.5 7V17L5 15.5V8.5Z" fill="#B91C1C" />
      <circle cx="12" cy="12" r="2.4" fill="#FFFFFF" />
    </svg>
  );
}

// 21. XAMPP Official Multi-node Cross
export function XamppIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#FB7A24" />
      <circle cx="7" cy="7" r="2.2" fill="#FFFFFF" />
      <circle cx="17" cy="7" r="2.2" fill="#FFFFFF" />
      <circle cx="7" cy="17" r="2.2" fill="#FFFFFF" />
      <circle cx="17" cy="17" r="2.2" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="2.8" fill="#FFFFFF" />
      <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

// 22. Antares (Telkom Indonesia IoT Platform)
export function AntaresIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#E11D48" />
      <path
        d="M12 4.5L5.5 19H8.8L10.2 15.8H13.8L15.2 19H18.5L12 4.5ZM11 13.5L12 10.2L13 13.5H11Z"
        fill="#FFFFFF"
      />
      <circle cx="12" cy="5.8" r="1.4" fill="#FFE4E6" />
      <path d="M8.8 8C10.6 6.8 13.4 6.8 15.2 8" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Unified Tech Icon Resolver */
export function TechIcon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number | string;
  className?: string;
}) {
  const n = name.toLowerCase().trim();

  if (n.includes("html")) return <HtmlIcon size={size} className={className} />;
  if (n.includes("css")) return <CssIcon size={size} className={className} />;
  if (n.includes("typescript") || n === "ts") return <TypescriptIcon size={size} className={className} />;
  if (n.includes("javascript") || n === "js") return <JavascriptIcon size={size} className={className} />;
  if (n.includes("python")) return <PythonIcon size={size} className={className} />;
  if (n.includes("php")) return <PhpIcon size={size} className={className} />;
  if (n.includes("react")) return <ReactIcon size={size} className={className} />;
  if (n.includes("tailwind")) return <TailwindIcon size={size} className={className} />;
  if (n.includes("bootstrap")) return <BootstrapIcon size={size} className={className} />;
  if (n.includes("laravel")) return <LaravelIcon size={size} className={className} />;
  if (n.includes("node")) return <NodejsIcon size={size} className={className} />;
  if (n.includes("rest") || n.includes("api")) return <ApiIcon size={size} className={className} />;
  if (n.includes("mysql")) return <MysqlIcon size={size} className={className} />;
  if (n.includes("postgres")) return <PostgresqlIcon size={size} className={className} />;
  if (n.includes("xampp")) return <XamppIcon size={size} className={className} />;
  if (n.includes("antares")) return <AntaresIcon size={size} className={className} />;
  if (n === "git") return <GitIcon size={size} className={className} />;
  if (n.includes("github")) return <GithubIcon size={size} className={className} />;
  if (n.includes("antigravity")) return <AntigravityIcon size={size} className={className} />;
  if (n.includes("vs code") || n.includes("vscode")) return <VscodeIcon size={size} className={className} />;
  if (n.includes("figma")) return <FigmaIcon size={size} className={className} />;
  if (n.includes("office") || n.includes("microsoft")) return <MicrosoftOfficeIcon size={size} className={className} />;

  // Fallback
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "4px",
        background: "var(--accent-light)",
        color: "var(--accent)",
        fontWeight: 700,
        fontSize: "0.75rem",
      }}
    >
      {name.charAt(0)}
    </span>
  );
}
