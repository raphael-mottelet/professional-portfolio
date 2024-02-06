from rest_framework import serializers
from .models import Experience, Education, Project, SocialLink

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('Experience_id', 'date', 'imageSrc', 'title', 'location', 'description', 'status')
        extra_kwargs = {
            'Experience_id': {'read_only': True},
            'imageSrc': {'required': False},
        }

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('Education_id', 'date', 'imageSrc', 'title', 'level', 'location', 'description')
        extra_kwargs = {
            'Education_id': {'read_only': True},
            'imageSrc': {'required': False},
        }

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('Project_id', 'name', 'imageSrc', 'techs', 'github')
        extra_kwargs = {
            'Project_id': {'read_only': True},
            'imageSrc': {'required': False},
        }

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ('Social_link_id', 'iconSrc', 'name', 'link')
        extra_kwargs = {
            'Social_link_id': {'read_only': True},
        }
