import { siteFooter } from "@/lib/site";

export function SiteFooter() {
    return (
        <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
            <h1>{siteFooter.name}</h1>

            <div className="flex flex-col items-end gap-2">
                <a href={`mailto:${siteFooter.email}`}>{siteFooter.email}</a>
                <div className="flex gap-2">
                    <h2>{siteFooter.role}</h2>
                    <h2>{siteFooter.location}</h2>
                </div>
            </div>
        </div>
    );
}
