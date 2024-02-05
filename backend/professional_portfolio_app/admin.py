from django.contrib import admin

from .models import Education, Experience, Project, SocialLink

admin.site.register(Education, Experience, Project, SocialLink)