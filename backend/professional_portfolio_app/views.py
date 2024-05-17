import sys
sys.path.append('..')

from django.shortcuts import render
from rest_framework import viewsets


from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.decorators import action
from .GPT_agent.gpt_functions import generate_response


from .models import Education, Experience, Project, SocialLink, Presentation, GPTConversation, User
from .serializers import ExperienceSerializer, EducationSerializer, SocialLinkSerializer, ProjectSerializer, PresentationSerializer, GPTConversationSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GPTConversationSerializer(viewsets.ModelViewSet):
    queryset = GPTConversation.objects.all()
    serializer_class = GPTConversationSerializer

    @action(detail=False, methods=['post'])
    def interact(self, request):
        user_ip = request.META['REMOTE_ADDR']
        user, created = User.objects.get_or_create(ip_address=user_ip)
        input_text = request.data.get('input_text')
        response_text = generate_response(input_text)
        conversation = GPTConversation.objects.create(user=user, input_text=input_text, response_text=response_text)
        return Response(GPTConversationSerializer(conversation).data)
    
    @action(detail=False, methods=['get'])
    def user_conversations(self, request):
        user_ip = request.META['REMOTE_ADDR']
        user = User.objects.get(ip_address=user_ip)
        conversations = GPTConversation.objects.filter(user=user).order_by('-timestamp')
        serializer = GPTConversationSerializer(conversations, many=True)
        return Response(serializer.data)
    


class ListPresentationView(ListAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer

class CreatePresentationView(CreateAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer
    
class UpdatePresentationView(UpdateAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer
    
class DestroyPresentationView(DestroyAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer
    
class PresentationDetails(RetrieveAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer



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
    