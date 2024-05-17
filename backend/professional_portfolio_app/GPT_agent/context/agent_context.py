import sys
sys.path.append('..')

def get_initial_context():
    return [
        {
            "role": "system",
            "content": "Vous êtes un agent IA capable de tout faire en utilisant des appels de fonctions. Lorsqu'on vous demande de faire quelque chose, utilisez l'appel de fonction disponible et répondez ensuite par un message confirmant ce que vous avez fait."
        },

        {
            "role":"system",
            "content": "Direction générale de l'enseignement scolaire (DGESCO)\n\nDernière modification le 09 août 2023 - Direction de l'information légale et administrative (Premier ministre)\n\nContactez-nous\n\nTél : 01 55 55 10 10\n\nFax : 01 55 55 38 54\n\nSite web : http://www.education.gouv.fr\n\nSite web : http://eduscol.education.fr\n\nFormulaire de contact\nSaisine par voie électronique  (liste des exceptions)\n\nAdresse\n\n107 rue de Grenelle\n75007 Paris\n\nAdresse postale\n\n110 rue de Grenelle\n75357 Paris SP 07\n\nResponsable(s)\n\nDirecteur général\n\nÉdouard GEFFRAY, conseiller d'État\n\nPour en savoir plus\n\nOrganigramme de la Direction générale de l'enseignement scolaire\n\nTextes de loi et références\n\nOrganisation et compétences des services de la Direction générale de l'enseignement scolaire (arrêté)\n\nCompétences de la Direction générale de l'enseignement scolaire (décret)\n\nOrganisation :\n\nDépartement des ressources humaines et des affaires générales\nMission Éducation, artistique et culturelle\nDirection du numérique pour l'éducation\nService de l'instruction publique et de l'action pédagogique\nService du budget et des politiques éducatives territoriales\nService de l'accompagnement des politiques éducatives\n\nDemander une mise à jour de cette page\n(réservé aux services publics)"
        },

        {
            "role": "system",
            "content": "Composition"
        },
        
        {
            "role": "system",
            "content": "Directeur général : Édouard Geffray"
        },

        {
            "role": "system",
            "content": "Cabinet : Amélie Miermont"
        },

        {
            "role": "system",
            "content": "Département des ressources humaines et des affaires générales : Sophie Marion"
        },

        {
            "role": "system",
            "content": "Cellule informatique : Yohan Renouf"
        },

        {
            "role": "system",
            "content": "Direction du numérique pour l'éducation (commun SG) : Audran Le Baron"
        },

        {
            "role": "system",
            "content": "Mission éducation artistique et culturelle : Manuel Brossé"
        },

        {
            "role": "system",
            "content": "Service de l'instruction publique et de l'action pédagogique"
        },

        {
            "role": "system",
            "content": "Chef de service : Rachel-Marie Pradeilles-Duval"
        },
        
        {
            "role": "system",
            "content": "Mission du pilotage des examens : Marie-Carmen Domingues"
        },

        {
            "role": "system",
            "content": "Sous-direction des savoirs fondamentaux et des parcours scolaires : Matthieu Lahaye"
        },

        {
            "role": "system",
            "content": "Adjointe au sous-directeur : Marjorie Koubi"
        },

        {
            "role": "system",
            "content": "Cellule nationale aide handicap école : N."
        },

        {
            "role": "system",
            "content": "Bureau des écoles maternelles et élémentaires : Sylvie Delobelle"
        },

        {
            "role": "system",
            "content": "Bureau des collèges : Sofia Nogueira"
        },

        {
            "role": "system",
            "content": "Bureau de l'école inclusive : Sébastien Mounié"
        },

        {
            "role": "system",
            "content": "Bureau de l'orientation et de la lutte contre le décrochage scolaire : Philippe Lebreton"
        },

        {
            "role": "system",
            "content": "Sous-direction des lycées et de la formation professionnelle : Adeline Croyere"
        },

        {
            "role": "system",
            "content": "Adjointe à la sous-directrice : Brigitte Trocmé"
        },

        {
            "role": "system",
            "content": "Mission éducation économie et campus : Matthieu Merciecca"
        },

        {
            "role": "system",
            "content": "Bureau des lycées généraux et technologiques : Agnès Poussin"
        },

        {
            "role": "system",
            "content": "Bureau des lycées professionnels, de l'apprentissage et de la formation professionnelle continue : Sébastien Begey"
        },

        {
            "role": "system",
            "content": "Bureau des diplômes professionnels : Sabine Lestrade"
        },

        {
            "role": "system",
            "content": "Service du budget et des politiques éducatives territoriales"
        },

        {
            "role": "system",
            "content": "Chef de service : Christophe Gehin"
        },

        {
            "role": "system",
            "content": "Sous-direction de la gestion des programmes budgétaires : Erwan Coubrun"
        },

        {
            "role": "system",
            "content": "Maîtrise d'ouvrage des systèmes d'information des ressources humaines : Haider Aloui"
        },

        {
            "role": "system",
            "content": "Bureau du programme \"enseignement scolaire public du premier degré\" : N."
        },

        {
            "role": "system",
            "content": "Bureau du programme \"enseignement scolaire public du second degré\" : Hervé Lesnard"
        },

        {
            "role": "system",
            "content": "Bureau du programme \"vie de l'élève\" : Cécile Goujon"
        },

        {
            "role": "system",
            "content": "Bureau de l'aide au pilotage et de la synthèse budgétaire : Frédéric Sprywa"
        },

        {
            "role": "system",
            "content": "Sous-direction de la performance et politiques éducatives territoriales : Patrice Durand"
        },
        
        {
            "role": "system",
            "content": "Mission des politiques éducatives d'outre mer : Frédérique Charbonnieras"
        },

        {
            "role": "system",
            "content": "Bureau des stratégies et performances académiques : Yves Beauvois"
        },

        {
            "role": "system",
            "content": "Bureau de la maîtrise d'ouvrage des systèmes d'information : Nicolas Soligny"
        },

        {
            "role": "system",
            "content": "Bureau de l'éducation prioritaire et des territoires : Vincent Philippe"
        },

        {
            "role": "system",
            "content": "Service de l'accompagnement des politiques éducatives"
        },

        {
            "role": "system",
            "content": "Chef de service : Jean Hubac"
        },

        {
            "role": "system",
            "content": "Sous-direction de l'innovation, de la formation et des ressources : Sandrine Bodin"
        },

        {
            "role": "system",
            "content": "Adjoint à la sous-directrice : Yann Bruyère"
        },

        {
            "role": "system",
            "content": "Bureau de l'innovation pédagogique : Cécile Pacchiana-Rossi"
        },
        
        {
            "role": "system",
            "content": "Bureau de la formation des personnels enseignants et d'éducation : Vincent Audebert"
        },

        {
            "role": "system",
            "content": "Bureau des contenus pédagogique et des langues : Laurent Bergez"
        },

        {
            "role": "system",
            "content": "Bureau de la diffusion et de l'information : Véronique Fouquat"
        },
        
        {
            "role": "system",
            "content": "Sous-direction de l'action éducative : Marc Pelletier"
        },
        
        
    ]
