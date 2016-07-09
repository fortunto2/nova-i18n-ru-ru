Package.describe({
  name: "lifefilm:nova-i18n-ru-ru",
  summary: "Telescope i18n package (ru_RU)",
  version: "0.26.4-nova",
  git: "https://github.com/fortunto2/nova-i18n-ru-ru.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.26.4-nova'
  ]);

  api.addFiles([
    'lib/ru_RU.js'
  ], ["client", "server"]);
});
