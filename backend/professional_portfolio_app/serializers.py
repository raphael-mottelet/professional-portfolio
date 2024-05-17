import sys
sys.path.append('..')

from rest_framework import serializers
from .models import Experience, Education, Project, SocialLink, Presentation, GPTConversation, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class GPTConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GPTConversation
        fields = '__all__'

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentation
        fields = ('id','image', 'title','description')
        extra_kwargs = {
            'image': {'required': False},
            'title': {'required': False},
            'description': {'required': False},
        }

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'date', 'imageSrc', 'title', 'location', 'description', 'status')
        extra_kwargs = {
            'title': {'required': False},
            'description': {'required': False},
            'imageSrc': {'required': False},
            'date': {'required': False},
            'status': {'required': False},
            'location': {'required': False},
        }

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'date', 'imageSrc', 'title', 'level', 'location', 'status', 'description')
        extra_kwargs = {
            'imageSrc': {'required': False},
            'title': {'required': False},
            'date': {'required': False},
            'level': {'required': False},
            'location': {'required': False},
            'description': {'required': False},
            'status': {'choices': Education.STATUS_CHOICES, 'default': 'ongoing'},
        }

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'imageSrc', 'techs', 'github', 'description')
        extra_kwargs = {
            'imageSrc': {'required': False},
            'name': {'required': False},
            'description': {'required': False},
            'techs': {'required': False},
            'github': {'required': False},
        }

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ('id', 'iconSrc', 'name', 'link')
        extra_kwargs = {
            'iconSrc': {'required': False},
            'name': {'required': False},
            'link': {'required': False},

        }

