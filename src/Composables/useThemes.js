import { onBeforeUnmount, onMounted, ref, watch } from "vue";

export function useThemes() {
  const theme = ref("system");
  const themes = ["light", "dark"];
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");

  const listener = () => {
    if (theme.value === "system") {
      applySystemTheme();
    }
  };

  const applySystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onMounted(() => {
    if (themes.includes(localStorage.appTheme)) {
      theme.value = localStorage.appTheme;
    }

    matcher.addEventListener("change", listener);

    listener();
  });

  onBeforeUnmount(() => {
    matcher.removeEventListener("change", listener);
  });

  watch(theme, (themeValue) => {
    if (themeValue === "light") {
      localStorage.appTheme = "light";
      document.documentElement.classList.remove("dark");
    }

    if (themeValue === "dark") {
      localStorage.appTheme = "dark";
      document.documentElement.classList.add("dark");
    }

    if (themeValue === "system") {
      localStorage.removeItem("appTheme");
      applySystemTheme();
    }
  });

  return { theme };
}
