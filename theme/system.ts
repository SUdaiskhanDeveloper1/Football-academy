import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Brand palette: deep navy (primary surface), pitch green (actions),
 * gold (small accents only) and cool greys for light surfaces.
 */
const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "white",
      color: "ink",
      fontFamily: "body"
    },
    "::selection": { bg: "gold.300", color: "navy.950" }
  },
  theme: {
    tokens: {
      colors: {
        navy: {
          50: { value: "#EEF2FA" },
          100: { value: "#D6DFF1" },
          200: { value: "#AFC0E2" },
          300: { value: "#7F98CC" },
          400: { value: "#4F6DAF" },
          500: { value: "#2F4D8F" },
          600: { value: "#1F3A73" },
          700: { value: "#172D5C" },
          800: { value: "#10214A" },
          900: { value: "#0B1838" },
          950: { value: "#070F26" }
        },
        pitch: {
          50: { value: "#EAF7EF" },
          100: { value: "#CDEEDA" },
          200: { value: "#9EDDB7" },
          300: { value: "#63C68D" },
          400: { value: "#2FAE67" },
          500: { value: "#14954F" },
          600: { value: "#0B7F42" },
          700: { value: "#086737" },
          800: { value: "#07502C" },
          900: { value: "#053B21" },
          950: { value: "#032513" }
        },
        gold: {
          50: { value: "#FFF8E6" },
          100: { value: "#FFEDBF" },
          200: { value: "#FFDD85" },
          300: { value: "#FCCB4A" },
          400: { value: "#F5B82E" },
          500: { value: "#DA9A0E" },
          600: { value: "#B27A08" },
          700: { value: "#875C0A" },
          800: { value: "#5E400B" },
          900: { value: "#3D2A08" },
          950: { value: "#241804" }
        },
        ink: { value: "#0F172A" },
        mist: { value: "#F3F5F9" }
      },
      fonts: {
        heading: { value: "var(--font-heading), 'Arial Narrow', Arial, sans-serif" },
        body: { value: "var(--font-body), system-ui, -apple-system, 'Segoe UI', sans-serif" }
      }
    },
    semanticTokens: {
      colors: {
        pitch: {
          solid: { value: "{colors.pitch.600}" },
          contrast: { value: "white" },
          fg: { value: "{colors.pitch.700}" },
          muted: { value: "{colors.pitch.100}" },
          subtle: { value: "{colors.pitch.50}" },
          emphasized: { value: "{colors.pitch.200}" },
          focusRing: { value: "{colors.pitch.500}" }
        },
        navy: {
          solid: { value: "{colors.navy.900}" },
          contrast: { value: "white" },
          fg: { value: "{colors.navy.800}" },
          muted: { value: "{colors.navy.100}" },
          subtle: { value: "{colors.navy.50}" },
          emphasized: { value: "{colors.navy.200}" },
          focusRing: { value: "{colors.navy.500}" }
        },
        gold: {
          solid: { value: "{colors.gold.400}" },
          contrast: { value: "{colors.navy.950}" },
          fg: { value: "{colors.gold.700}" },
          muted: { value: "{colors.gold.100}" },
          subtle: { value: "{colors.gold.50}" },
          emphasized: { value: "{colors.gold.200}" },
          focusRing: { value: "{colors.gold.500}" }
        },
        muted: { value: "#475569" },
        line: { value: "#E2E8F0" }
      }
    }
  }
});

export const system = createSystem(defaultConfig, config);
