# Exercices sur les chemins relatifs

En informatique, les _chemins relatifs_ permettent de représenter l'emplacement d'un fichier ou d'une page Web _à partir de l'endroit où on se trouve actuellement_.

Dans les premières années du Web, les sites Web n'étaient fait qu'avec des fichiers « statiques », et aller à l'adresse `https://example.com/a/b/c.html` voulait dire « voir le fichier `c.html` dans le dossier `b` dans le dossier `a` du site `https://example.com` ».

Aujourd'hui c'est un peu plus compliqué parce que si on va à l'adresse `https://github.com/cedricvanrompay/exercices-chemins-relatifs` il n'y as pas vraiment « un fichier `exercices-chemins-relatifs` dans un dossier `cedricvanrompay` » sur le serveur, la page est Web est générée par le serveur juste pour cette réponse, mais les règles des liens Web sont restés les mêmes, comme si on parlait de vrai fichiers et de vrai dossiers.

En HTML (et aussi en [Markdown][], un format pour écrire du texte très utilisé sur GitHub et dans beaucoup d'autres sites d'informatique), les chemins apparaissent principalement:

* dans l'attribut `href` des balises `<a>`, pour faire des liens qui permettent de naviguer vers d'autres pages [(voir la documentation sur MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#technical_summary)
* dans l'attribut `src` de balises comme `<img>` (pour insérer des images), `<link>` (typiquement pour styliser la page avec du CSS) et `<script>` (pour ajouter du code JavaScript)

[Markdown]: https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax