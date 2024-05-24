# Dans votre fichier urls.py

import sys
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

sys.path.append('..')

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('get_presentation/', include('professional_portfolio_app.app_urls')),
    path('get_experience/', include('professional_portfolio_app.app_urls')),
    path('get_education/', include('professional_portfolio_app.app_urls')),  
    path('get_projects/', include('professional_portfolio_app.app_urls')),  
    path('get_social-links/', include('professional_portfolio_app.app_urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
