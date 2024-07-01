from django.contrib import admin
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.utils import timezone
from django.conf import settings
from django.http import HttpResponseForbidden

from .models import Education, Experience, Project, SocialLink, Presentation

class CustomAdminSite(admin.AdminSite):
    site_header = "Admin mottelet.dev"
    site_title = "Administration mottelet.dev"
    index_title = "Modèles de données"
    name = "APN application"
    enable_nav_sidebar = True



# Register other models
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(SocialLink)
admin.site.register(Presentation)
