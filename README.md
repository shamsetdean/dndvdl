# DNDVDL-MAP

## Principe

DNDVDL-MAP est un outil privé qui permet de gérer et d'organiser des baies informatiques.

## Moyens utilisés

- **Frontend** : HTML/CSS/JavaScript vanilla, fichier unique, aucune dépendance de build
- **Authentification** : Supabase Auth (email + mot de passe), table `profiles` avec statut (`pending`/`approved`/`refused`) et rôle (`admin`/`editeur`/`lecteur`), RLS activée
- **Données métier** : fichier JSON local, importé/exporté manuellement, jamais stocké en base
- **Icônes** : Lucide, intégrées en SVG inline
- **QR code** : génération SVG locale, sans appel réseau
- **Hébergement** : GitHub Pages

## Droits d'auteur

© Anthropotech Lab — tous droits réservés.

Application développée pour un usage interne et privé. Toute reproduction, diffusion ou réutilisation, en tout ou partie, est interdite sans autorisation écrite préalable. Voir le fichier `LICENSE` à la racine du dépôt pour les conditions complètes.
