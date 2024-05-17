import json
from openai import OpenAI
from ..models import User, GPTConversation

OpenAI.api_key = "insert your key here"

def write_file(filename, content):
    sure = input("Do you want to write to " + filename + "? (YES/NO) ")
    if sure == "YES":
        with open(filename, "w") as f:
            f.write(content)
        return "Successfully written file " + filename
    else:
        return "ERROR: You are not allowed to write to this file"

def get_jokes(number_of_jokes):
    return json.dumps([
        "Why don't scientists trust atoms? Because they make up all the things!",
        'How did the computer get wasted? It took screenshots!',
        "Why don't skeletons fight other skeletons? They don't have the guts!"
    ])

definitions = [
    {
        "name": "get_jokes",
        "description": "Gets jokes from the joke database",
        "parameters": {
            "type": "object",
            "properties": {
                "number_of_jokes": {
                    "type": "number",
                    "description": "Gets the specified number of jokes"
                }
            }
        },
        "required": ["number_of_jokes"]
    },
    {
        "name": "write_file",
        "description": "Writes content to a file",
        "parameters": {
            "type": "object",
            "properties": {
                "filename": {
                    "type": "string",
                    "description": "Filename to write to"
                },
                "content": {
                    "type": "string",
                    "description": "Content to write to file"
                }
            }
        },
        "required": ["filename", "content"]
    }
]

def generate_response(user_ip, input_text):
    user, created = User.objects.get_or_create(ip_address=user_ip, defaults={'name': f'Guest_{user_ip.replace(".", "_")}'})
    
    client = OpenAI(api_key=OpenAI.api_key)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": input_text}],
    )
    
    message_content = response.choices[0].message.content
    GPTConversation.objects.create(user=user, input_text=input_text, response_text=message_content)
    
    return message_content
