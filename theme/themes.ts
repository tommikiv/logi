export const themes = {
    light: {
        background: "#FFFFFF",
        text: "#000000",
        primary: "#DBCEA5",
    },
    dark: {
        background: "#000000",
        text: "#FFFFFF",
        primary: "#DBCEA5",
    },
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes.light | typeof themes.dark;