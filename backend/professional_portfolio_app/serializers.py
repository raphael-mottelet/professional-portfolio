from rest_framework import serializers
from .models import Experience, Education, Project, SocialLink

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'date', 'imageSrc', 'title', 'location', 'description', 'status')
        extra_kwargs = {
            'imageSrc': {'required': False},
            'date': {'required': False},
            'status': {'required': False},
            'location': {'required': False},
        }

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'date', 'imageSrc', 'title', 'level', 'location', 'description')
        extra_kwargs = {
            'imageSrc': {'required': False},
            'date': {'required': False},
            'level': {'required': False},
            'location': {'required': False},
        }

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'imageSrc', 'techs', 'github')
        extra_kwargs = {
            'imageSrc': {'required': False},
            'github': {'required': False},
        }

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ('id', 'iconSrc', 'name', 'link')
        extra_kwargs = {
            'iconSrc': {'required': False},

        }

