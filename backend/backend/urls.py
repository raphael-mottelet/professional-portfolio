from django.contrib import admin
from django.urls import path
from professional_portfolio_app.views import (ListExperienceView, CreateExperienceView, UpdateExperienceView, DestroyExperienceView, ExperienceDetails,
                                              ListEducationView, CreateEducationView, UpdateEducationView, DestroyEducationView, EducationDetails,
                                              ListProjectView, CreateProjectView, UpdateProjectView, DestroyProjectView, ProjectDetails,
                                              ListSocialLinkView, CreateSocialLinkView, UpdateSocialLinkView, DestroySocialLinkView, SocialLinkDetails)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Root URL pattern
    path('', ListExperienceView.as_view(), name='home_experience'),
    path('experience/', ListExperienceView.as_view(), name='home_experience'),
    path('education/', ListEducationView.as_view(), name='home_education'),  
    path('projects/', ListProjectView.as_view(), name='home_projects'),  
    path('social-links/', ListSocialLinkView.as_view(), name='home_social_links'),

    # URLs for CRUD operations on Experience model
    path('actions/experience/list/', ListExperienceView.as_view(), name='list_experience'),
    path('actions/experience/create/', CreateExperienceView.as_view(), name='create_experience'),
    path('actions/experience/update/<int:pk>/', UpdateExperienceView.as_view(), name='update_experience'),
    path('actions/experience/destroy/<int:pk>/', DestroyExperienceView.as_view(), name='destroy_experience'),
    path('actions/experience/details/<int:pk>/', ExperienceDetails.as_view(), name='experience_details'),

    # URLs for CRUD operations on Education model
    path('actions/education/list/', ListEducationView.as_view(), name='list_education'),
    path('actions/education/create/', CreateEducationView.as_view(), name='create_education'),
    path('actions/education/update/<int:pk>/', UpdateEducationView.as_view(), name='update_education'),
    path('actions/education/destroy/<int:pk>/', DestroyEducationView.as_view(), name='destroy_education'),
    path('actions/education/details/<int:pk>/', EducationDetails.as_view(), name='education_details'),

    # URLs for CRUD operations on Project model
    path('actions/project/list/', ListProjectView.as_view(), name='list_project'),
    path('actions/project/create/', CreateProjectView.as_view(), name='create_project'),
    path('actions/project/update/<int:pk>/', UpdateProjectView.as_view(), name='update_project'),
    path('actions/project/destroy/<int:pk>/', DestroyProjectView.as_view(), name='destroy_project'),
    path('actions/project/details/<int:pk>/', ProjectDetails.as_view(), name='project_details'),

    # URLs for CRUD operations on SocialLink model
    path('actions/social-link/list/', ListSocialLinkView.as_view(), name='list_social_link'),
    path('actions/social-link/create/', CreateSocialLinkView.as_view(), name='create_social_link'),
    path('actions/social-link/update/<int:pk>/', UpdateSocialLinkView.as_view(), name='update_social_link'),
    path('actions/social-link/destroy/<int:pk>/', DestroySocialLinkView.as_view(), name='destroy_social_link'),
    path('actions/social-link/details/<int:pk>/', SocialLinkDetails.as_view(), name='social_link_details'),
]
