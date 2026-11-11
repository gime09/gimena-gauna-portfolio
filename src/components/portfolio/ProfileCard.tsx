import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

import photo from "@/assets/gimena-gauna.png.asset.json";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Correo", href: `mailto:${profile.email}`, icon: Mail },
  { label: "WhatsApp", href: profile.whatsappUrl, icon: MessageCircle },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className="grid h-11 w-11 place-items-center rounded-full border border-foreground/60 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <s.icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}

export function ProfileCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl glass p-4 text-center", className)}>
      <div
        className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl lg:max-w-none"
        style={{ background: "var(--gradient-photo)" }}
      >
        <img
          src={photo.url}
          alt="Retrato de Gimena Gauna"
          className="h-full w-full object-cover object-[50%_15%]"
          width={574}
          height={752}
        />
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-tight">{profile.name}</h2>
      <p className="mx-auto mt-2 max-w-xs text-[13px] font-medium leading-relaxed text-primary">
        {profile.title}
      </p>
      <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
        {profile.shortBio}
      </p>
      <SocialLinks className="mt-5" />
      <Link
        to="/contacto"
        className="mt-6 inline-flex items-center gap-2 rounded-full btn-iridescent px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
      >
        CV / Contacto <Send className="h-4 w-4" />
      </Link>
      <p className="mt-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gimena Gauna
      </p>
    </div>
  );
}
