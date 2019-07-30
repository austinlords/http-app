import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://b10a85031efb45e49271bf99ef1021e4@sentry.io/1516666"
  });
}

function log() {
  Sentry.captureException(new Error("something broke"));
}

export default {
  init,
  log
};
