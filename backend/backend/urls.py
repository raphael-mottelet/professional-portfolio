from django.contrib import admin
from django.urls import path
from professional_portfolio_app.views import ListExperienceView, CreateExperienceView, UpdateExperienceView, DestroyExperienceView, ExperienceDetails

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', ListExperienceView.as_view(), name='home'),  # Root URL pattern

    path('actions/list/', ListExperienceView.as_view(), name='list_experience'),
    path('actions/create/', CreateExperienceView.as_view(), name='create_experience'),
    path('actions/update/<int:pk>/', UpdateExperienceView.as_view(), name='update_experience'),
    path('actions/destroy/<int:pk>/', DestroyExperienceView.as_view(), name='destroy_experience'),
    path('actions/details/<int:pk>/', ExperienceDetails.as_view(), name='experience_details'),
]
