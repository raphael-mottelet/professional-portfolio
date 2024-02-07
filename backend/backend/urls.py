from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),

    path('experience/', include('professional_portfolio_app.app_urls')),
    path('education/', include('professional_portfolio_app.app_urls')),  
    path('projects/', include('professional_portfolio_app.app_urls')),  
    path('social-links/', include('professional_portfolio_app.app_urls')),
]
