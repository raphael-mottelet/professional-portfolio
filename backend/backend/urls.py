# Dans votre fichier urls.py

import sys
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

sys.path.append('..')

from professional_portfolio_app.views import UserViewSet, GPTConversationSerializer, GPTConversationSerializer

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'conversations', GPTConversationSerializer)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

    path('api/interact/', GPTConversationSerializer.as_view({'post': 'interact'}), name='interact'),
    path('api/user_conversations/', GPTConversationSerializer.as_view({'get': 'user_conversations'}), name='user_conversations'),
    
    path('get_presentation/', include('professional_portfolio_app.app_urls')),
    path('get_experience/', include('professional_portfolio_app.app_urls')),
    path('get_education/', include('professional_portfolio_app.app_urls')),  
    path('get_projects/', include('professional_portfolio_app.app_urls')),  
    path('get_social-links/', include('professional_portfolio_app.app_urls')),
]
