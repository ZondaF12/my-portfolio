"use client";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import {
    gradientCanvasStyle,
    shaderGradientUrl,
} from "@/lib/site";

export function ShaderGradientBackground() {
    return (
        <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={gradientCanvasStyle}
        >
            <ShaderGradient control="query" urlString={shaderGradientUrl} />
        </ShaderGradientCanvas>
    );
}
