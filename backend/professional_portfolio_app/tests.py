from django.core.management.base import BaseCommand
from professional_portfolio_app.models import User
from professional_portfolio_app.GPT_agent.gpt_functions import generate_response

class Command(BaseCommand):
    help = 'Test interaction with the GPT agent via terminal'

    def handle(self, *args, **kwargs):
        user_ip = '127.0.0.1'  # IP pour les tests
        user, created = User.objects.get_or_create(ip_address=user_ip, defaults={'name': 'Test User'})
        
        while True:
            input_text = input("You: ")
            if input_text.lower() in ['exit', 'quit']:
                break
            response_text = generate_response(user_ip, input_text)
            print(f"Agent: {response_text}")
