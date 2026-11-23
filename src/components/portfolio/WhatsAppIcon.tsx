import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.2 7.8c.2-.4.5-.6.9-.6h.6c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c.6 1.1 1.5 2 2.6 2.6l.8-.7c.2-.2.5-.2.7-.1l1.9.8c.3.1.4.3.4.5v.6c0 .4-.2.7-.6.9-.5.2-1 .3-1.5.2-3.8-.6-6.8-3.6-7.4-7.4-.1-.5 0-1 .2-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
