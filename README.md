# DNDVDL-MAP

## Principe

DNDVDL-MAP est un outil privé de cartographie du câblage réseau (RJ45, fibre) pour les 13 bâtiments municipaux de Ferrières-en-Brie. Il documente, baie par baie, l'ensemble des connexions physiques : bandeaux de brassage, switches, tiroirs, NAS, onduleurs et équipements réseau, avec le détail de chaque port (périphérique connecté, bureau, prise murale, adresse IP/MAC, couleur de câble).

L'application ne contient aucune donnée par défaut : c'est une coquille vide qui charge les données réelles depuis un fichier JSON, gardé et distribué manuellement par l'administrateur. Rien n'est publié en clair dans le dépôt.

L'accès est contrôlé par email : une personne demande l'accès, l'administrateur approuve (en lecture seule ou en lecture + écriture) ou refuse. Un filigrane de traçabilité identifie chaque consultation.

## Moyens utilisés

- **Frontend** : HTML/CSS/JavaScript vanilla, fichier unique, aucune dépendance de build
- **Authentification** : Supabase Auth (email + mot de passe), table `profiles` avec statut (`pending`/`approved`/`refused`) et rôle (`admin`/`editeur`/`lecteur`), RLS activée
- **Données métier** : fichier JSON local, importé/exporté manuellement, jamais stocké en base
- **Icônes** : Lucide, intégrées en SVG inline
- **QR code** : génération SVG locale, sans appel réseau
- **Hébergement** : GitHub Pages

## Droits d'auteur

© Anthropotech Lab (Shams Guettaf) — tous droits réservés.

Application développée pour un usage interne et privé. Toute reproduction, diffusion ou réutilisation, en tout ou partie, est interdite sans autorisation écrite préalable. Voir le fichier `LICENSE` à la racine du dépôt pour les conditions complètes.
