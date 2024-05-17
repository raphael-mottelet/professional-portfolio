import sys
sys.path.append('..')

class ContextManager:
    def __init__(self, context_keywords):
        self.context_keywords = context_keywords

    def is_in_context(self, question):
        """
        Vérifie si la question contient un mot clé associé au contexte.
        """
        for keyword in self.context_keywords:
            if keyword in question.lower():
                return True
        return False
