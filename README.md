-- Frontend (React) — Partie visible par l’utilisateur
-- Localisation : /frontend
-- Technologies : React.js, HTML, CSS, Vite, Fetch API
 
                 Responsabilités :
Interface utilisateur pour se connecter (via CNE)

Appels API vers le backend PHP (/api/login.php, etc.)

Affichage des fillieres DUT

Affichage dynamique des cours, PDFs filtrés

Support multilingue (Français / Anglais)

    Backend (PHP + phpMyAdmin)
    Localisation : /backend
    Technologies : PHP, MySQL (via phpMyAdmin)

                 Responsabilités :
Authentifier l’utilisateur via sa base SQL (CNE + mot de passe)

Gérer la session utilisateur (ex: via $_SESSION)

Renvoyer les données cours/PDF à partir de la base ou d’une API Moodle

Fournir des endpoints PHP appelés par le frontend React :

    Moodle (LMS) — Fournisseur de contenu
    Technologies : PHP, MySQL, REST API

                 Responsabilités :
Gérer les cours, sections, fichiers (PDFs)

Héberger les ressources de formation

Répondre aux appels API du backend (ex: core_course_get_contents)