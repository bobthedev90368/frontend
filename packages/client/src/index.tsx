/**
 * Configure contexts and render App
 */
import { render } from "solid-js/web";

import i18n, { I18nContext } from "@revolt/i18n";
import { ModalRenderer } from "@revolt/modal";
import { Router } from "@revolt/routing";
import { Hydrate } from "@revolt/state";
import { ApplyGlobalStyles, Masks, ThemeProvider, darkTheme } from "@revolt/ui";

/* @refresh reload */
import "@revolt/ui/styles";

import App from "./App";
import "./sentry";

render(
  () => (
    <Hydrate>
      <Masks />
      <Router>
        <I18nContext.Provider value={i18n}>
          <ThemeProvider theme={darkTheme}>
            <App />
            <ModalRenderer />
            <ApplyGlobalStyles />
          </ThemeProvider>
        </I18nContext.Provider>
      </Router>
    </Hydrate>
  ),
  document.getElementById("root") as HTMLElement
);
