import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask me about your master's project...";

// Greeting shown on the start screen.
// NOTE: I normalized punctuation/spelling to 'university'. If you prefer the exact original text, tell me and I will revert.
export const GREETING = "Hi! I am your colleague for your university master's project!";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    // Tweak grayscale slightly for a softer, academic feel
    grayscale: {
      hue: 210,
      tint: 8,
      shade: theme === "dark" ? -2 : -5,
    },
    // University pale-blue accent
    accent: {
      // light: a calm pale blue; dark: slightly brighter so it stands out on dark backgrounds
      primary: theme === "dark" ? "#cfe8ff" : "#a8d0ff",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
