https://loginvs.up.railway.app
# VSup
🖼️ Frontend (React) — Partie visible par l’utilisateur
📍 Localisation : /frontend
🔧 Technologies : React.js, HTML, CSS
 Responsabilités :
Interface utilisateur (UI)

Affichage du formulaire de connexion

Affichage des cours et PDF

Appels HTTP vers mon backend Node.js

Stockage local du token (dans localStorage ou cookies)

Navigation (React Router)

    Composants React typiques :
    
Login.jsx → formulaire d’authentification

Dashboard.jsx → liste des cours

PDFViewer.jsx → liste de fichiers PDF

Navbar.jsx → navigation

🛠️ Backend (Node.js + SQL) — Partie serveur (invisible pour l’utilisateur)
📍 Localisation : /backend
🔧 Technologies : Node.js, Express, MySQL ou PostgreSQL
 Responsabilités :
Authentifier l’utilisateur via ta base SQL (/api/login)

Protéger les routes avec un JWT ou session

Contacter Moodle via API REST avec un token sécurisé

Filtrer les données Moodle (ex : ne renvoyer que les PDF)

Fournir des endpoints à ton frontend :

/api/login

/api/courses

/api/pdfs

🎓 Moodle (LMS) — Fournisseur de contenu
🔧 Technologies : PHP, MySQL, REST API
 Responsabilités :
Gérer les cours, sections, fichiers (PDFs)

Héberger les ressources

Répondre aux appels API de ton backend

🧩 Exemple de scénario :
🔐 Connexion
L’utilisateur entre son email + mot de passe → (frontend)

Le backend (/api/login) vérifie dans ta base SQL → (backend)

Si OK, ton backend renvoie un token JWT → (backend → frontend)

📚 Récupération des PDF
Le frontend appelle /api/pdfs avec le token → (frontend → backend)

Ton backend appelle Moodle → core_course_get_contents → (backend → Moodle)

Il filtre les fichiers .pdf, puis renvoie les résultats → (backend → frontend)

📁 Arborescence du projet (/frontend, /backend)

📦 Dépendances à installer

🧱 Structure initiale de fichiers
