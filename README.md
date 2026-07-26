# DNDVDL-MAP

Application web statique, sans backend. Aucune donnée n'est stockée sur le
serveur : tout le fonctionnement repose sur le navigateur de la personne qui
l'utilise.

## Déploiement

1. Déposer le contenu de ce dossier (`index.html`, `assets/`,
   `manifest.webmanifest`, `service-worker.js`) dans un dépôt.
2. Activer la publication statique (ex. GitHub Pages) depuis la branche
   principale.
3. L'application est accessible à l'URL de publication.

## Utilisation

Au premier lancement, l'application est vide et propose d'importer un
fichier de données au format JSON. Ce fichier est traité localement par le
navigateur ; aucune requête réseau n'est effectuée lors de l'import.

Un bouton d'export permet de télécharger l'état courant à tout moment.

## Installation en PWA

L'application peut être installée sur l'écran d'accueil d'un mobile
(Safari : Partager → "Sur l'écran d'accueil"), avec prise en charge du mode
hors ligne via un service worker.

## Stockage local

Les données importées sont conservées dans le stockage local du navigateur.
Ce stockage n'est pas synchronisé entre appareils ou navigateurs, et peut
être effacé par l'utilisateur ou le système. Exporter régulièrement est
recommandé.

## Licence des dépendances

La génération de QR code embarquée (`assets/qrcode.js`) est distribuée sous
licence MIT.

## Licence

Voir `LICENSE`. Tous droits réservés.
