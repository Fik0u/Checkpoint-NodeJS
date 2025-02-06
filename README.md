L'initialisation du projet commence avec 'npm init' qui va mettre en place les packages JSON.
Pour créer notre serveur, nous aurons recours à un module qui fait partie du noyau de Node.JS, à savoir 'http' et qui restera sur écoute sur le port attribué.
Par souci d'optimisation et d'ergonomie, nous installons aussi un module tiers 'nodemon' qui permet au serveur de rester actif automatiquement, sans qu'on le relance à chaque étape.
De plus, pour toute opération qui concerne les fichiers, nous faisons appel à un autre module interne (Core module) qui gère le système de fichiers, à savoir 'fs'.
Quant aux programmes "passeword-generator" et "email-sender" nous avons encore une fois utiliser d'autres modules externes (Third part module).
Bien entendu nos modules externes doivent être mis à disposition de notre programme, de ce fait on a recours à l'import/export dans notre code.
