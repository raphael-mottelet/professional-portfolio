from django.contrib import admin
from django.urls import path
from professional_portfolio_app.views import api_example  # Import your view function

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/example/', api_example, name='api_example'),  # Use the imported view function
]
