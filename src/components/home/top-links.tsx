import { socialLinks } from "@/lib/site";

export function TopLinks() {
    return (
        <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
            <div className="flex justify-end gap-2 flex-wrap">
                {socialLinks.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
}
