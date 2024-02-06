from rest_framework import serializers
from .models import Experience, Education, Project, SocialLink

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('date', 'imageSrc', 'title', 'location', 'description', 'status')
        extra_kwargs = {
            'imageSrc': {'required': False},
        }

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('date', 'imageSrc', 'title', 'level', 'location', 'description')
        extra_kwargs = {
            'imageSrc': {'required': False},
        }

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'imageSrc', 'techs', 'github')
        extra_kwargs = {
            'imageSrc': {'required': False},
        }

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ('iconSrc', 'name', 'link')

