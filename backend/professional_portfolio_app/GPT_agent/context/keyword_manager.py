import sys
sys.path.append('..')

from context.context_manager import ContextManager  # type: ignore # Importation du gestionnaire de contexte

DGESCO_keywords = ["dgesco", "direction générale de l'enseignement scolaire", "edouard geffray", "107 rue de grenelle", "paris", "educatio.gouv.fr", "eduscol.education.fr"]

general_keywords = ["bonjour", "salut", "hello", "ça va", "comment ça va", "merci", "s'il vous plaît","historique des messages","tu te souviens de notre conversation ?","condensé","hstorique","donnees json","données json"]

all_keywords = DGESCO_keywords + general_keywords

context_manager = ContextManager(context_keywords=all_keywords)
