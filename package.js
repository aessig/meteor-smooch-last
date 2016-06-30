Package.describe({
  name: 'aessig:smooch-last',
  version: '0.0.1',

  // Brief, one-line summary of the package.
  summary: 'Latest version Smooch',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aessig/meteor-smooch-last.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.1');
  api.addFiles('smooch.min.js', 'client');
});
