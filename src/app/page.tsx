import { ShaderGradientBackground } from "@/components/home/shader-gradient-background";
import { SiteFooter } from "@/components/home/site-footer";
import { TopLinks } from "@/components/home/top-links";

export default function Home() {
    return (
        <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
            <ShaderGradientBackground />
            <TopLinks />
            <SiteFooter />
        </div>
    );
}
