from django.contrib import admin

from .models import Education, Experience, Project, SocialLink, Presentation

admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(SocialLink)
admin.site.register(Presentation)
