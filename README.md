# Exercices sur les chemins relatifs

En informatique, les _chemins relatifs_ permettent de représenter l'emplacement d'un fichier ou d'une page Web _à partir de l'endroit où on se trouve actuellement_.

Dans les premières années du Web, les sites Web n'étaient fait qu'avec des fichiers « statiques », et aller à l'adresse `https://example.com/a/b/c.html` voulait dire « voir le fichier `c.html` dans le dossier `b` dans le dossier `a` du site `https://example.com` ».

Aujourd'hui c'est un peu plus compliqué parce que si on va à l'adresse `https://github.com/cedricvanrompay/exercices-chemins-relatifs` il n'y as pas vraiment « un fichier `exercices-chemins-relatifs` dans un dossier `cedricvanrompay` » sur le serveur, la page est Web est générée par le serveur juste pour cette réponse, mais les règles des liens Web sont restés les mêmes, comme si on parlait de vrai fichiers et de vrai dossiers.

En HTML (et aussi en [Markdown][], un format pour écrire du texte très utilisé sur GitHub et dans beaucoup d'autres sites d'informatique), les chemins apparaissent principalement:

* dans l'attribut `href` des balises `<a>`, pour faire des liens qui permettent de naviguer vers d'autres pages [(voir la documentation sur MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#technical_summary)
* dans l'attribut `src` de balises comme `<img>` (pour insérer des images), `<link>` (typiquement pour styliser la page avec du CSS) et `<script>` (pour ajouter du code JavaScript)

[Markdown]: https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

Si un lien contient une adresse commençant par `https://` (ou `http://`, mais aujourd'hui on essaie d'éviter ces adresses qui sont moins sécurisées), le navigateur va à cette adresse exacte. On dit que le lien est un « lien absolu ».

Sinon, le navigateur considère que le lien est un « lien relatif », c'est à dire qu'il pointe vers une page du même site Web que celui sur lequel l'utilisateur se trouve actuellement. Plus précisément, un lien relatif donne au navigateur le _chemin_ d'une autre page du même site.

Et ce chemin peut lui aussi être soit « absolu », soit « relatif ». Si le chemin commence par un « slash » (le caractère `/`), il est absolu, et le navigateur va juste mettre bout-à-bout le site actuel et le chemin du lien. Par exemple, depuis n'importe qu'elle page sur `https://github.com`, l'adresse `/cedricvanrompay/exercices-chemins-relatifs` pointe vers la page `https://github.com/cedricvanrompay/exercices-chemins-relatifs`, quel que soit l'endroit où on se situe dans `https://github.com`.

Si le chemin ne commence pas par un slash, le navigateur considère que le chemin est un _chemin relatif_. Il va alors utiliser le chemin actuel (la partie de l'adresse actuelle qui est après le site) et le chemin relatif du lien pour calculer le chemin de destination.

Ce calcul est parfois un peu compliqué pour les débutants, donc voici un exercice sous forme d'une application Web pour s'entraîner à le faire.