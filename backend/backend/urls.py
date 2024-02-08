from django.contrib import admin
from django.urls import include, path
from professional_portfolio_app.views import ListExperienceView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ListExperienceView.as_view(), name='list_experience'),

    path('experience/', include('professional_portfolio_app.app_urls')),
    path('education/', include('professional_portfolio_app.app_urls')),  
    path('projects/', include('professional_portfolio_app.app_urls')),  
    path('social-links/', include('professional_portfolio_app.app_urls')),
]
