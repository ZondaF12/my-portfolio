import type { CSSProperties } from "react";

export const shaderGradientUrl =
    "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0.4&uDensity=1.5&uFrequency=0&uSpeed=0.2&uStrength=1.8&uTime=8&wireframe=false";

export const gradientCanvasStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    pointerEvents: "none",
    height: "100vh",
};

export type SocialLink = {
    label: string;
    href: string;
};

export const socialLinks: SocialLink[] = [
    {
        label: "Deborah Bell Interiors",
        href: "https://deborahbellinteriors.com",
    },
    {
        label: "Pocket Garage",
        href: "https://apps.apple.com/gb/app/my-pocket-garage/id6447470205",
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/ruaridh-bell/",
    },
    {
        label: "Strava",
        href: "https://strava.app.link/Gzlrh8LmhPb",
    },
    {
        label: "Github",
        href: "https://github.com/zondaf12",
    },
    {
        label: "X",
        href: "https://www.x.com/ruaridhbell",
    },
];

export const siteFooter = {
    name: "Ruaridh Bell",
    email: "ruaridhbell73@googlemail.com",
    role: "Software Engineer",
    location: "Edinburgh",
} as const;
