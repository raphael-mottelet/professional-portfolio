from django.contrib import admin

from .models import Education, Experience, Project, SocialLink

#admin.site.register(Education, Experience, Project, SocialLink)  ne marche pas, ne peut pas prendre plus de deux arguments en paramètreadmin.site.register(Education)

admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(SocialLink)