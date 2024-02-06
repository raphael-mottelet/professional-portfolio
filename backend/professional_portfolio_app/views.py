from django.shortcuts import render

from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from .models import Education, Experience, Project, SocialLink
from .serializers import ExperienceSerializer, EducationSerializer, SocialLinkSerializer, ProjectSerializer

class ListExperienceView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class CreateExperienceView(CreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class UpdateExperienceView(UpdateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class DestroyExperienceView(DestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ExperienceDetails(RetrieveAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer



class ListEducationView(ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class CreateEducationView(CreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class UpdateEducationView(UpdateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class DestroyEducationView(DestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationDetails(RetrieveAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer



class ListProjectView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class CreateProjectView(CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class UpdateProjectView(UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class DestroyProjectView(DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetails(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer



class ListSocialLinkView(ListAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class CreateSocialLinkView(CreateAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class UpdateSocialLinkView(UpdateAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class DestroySocialLinkView(DestroyAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class SocialLinkDetails(RetrieveAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer