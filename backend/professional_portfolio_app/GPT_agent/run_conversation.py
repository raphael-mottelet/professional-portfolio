import sys
sys.path.append('..')

import json
from .gpt_functions import generate_response
from openai import OpenAI
from context.agent_context import get_initial_context
from context.keyword_manager import context_manager
from django.conf import settings

OpenAI.api_key = ""

def load_chat_history(messages):
    try:
        with open("history.json", "r") as file:
            chat_history = json.load(file)
            messages.extend(chat_history)
    except FileNotFoundError:
        print("Aucun historique de chat trouvé.")
    except Exception as e:
        print(f"Erreur lors du chargement de l'historique du chat : {e}")

def run_conversation(messages=[], user_ip='127.0.0.1'):
        
    while True:
        try:
            user_message = input("Vous: ")

            if not context_manager.is_in_context(user_message):
                print("Gardez la conversation dans le contexte de la DGESCO.")
                continue

            response_text = generate_response(user_ip, user_message)
            print(f"GPT: {response_text}")

            if response_text == "Conversation terminée":
                break

        except Exception as e:
            print(f"Erreur lors de la création de la completion : {e}")
            return

if __name__ == "__main__":
    messages = get_initial_context()
    run_conversation(messages)
