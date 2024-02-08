from django.urls import path

from professional_portfolio_app.views import (ListExperienceView, CreateExperienceView, UpdateExperienceView, DestroyExperienceView, ExperienceDetails,
                                              ListEducationView, CreateEducationView, UpdateEducationView, DestroyEducationView, EducationDetails,
                                              ListProjectView, CreateProjectView, UpdateProjectView, DestroyProjectView, ProjectDetails,
                                              ListSocialLinkView, CreateSocialLinkView, UpdateSocialLinkView, DestroySocialLinkView, SocialLinkDetails)


urlpatterns = [

    # URLs for CRUD operations on Experience model
    # URLs for CRUD operations on Experience model
    path('list/', ListExperienceView.as_view(), name='list_experience'),
    path('create/', CreateExperienceView.as_view(), name='create_experience'),
    path('<pk>/update/', UpdateExperienceView.as_view(), name='update_experience'),
    path('<pk>/destroy/', DestroyExperienceView.as_view(), name='destroy_experience'),
    path('<pk>/details/', ExperienceDetails.as_view(), name='experience_details'),

    # URLs for CRUD operations on Education model
    path('list/', ListEducationView.as_view(), name='list_education'),
    path('create/', CreateEducationView.as_view(), name='create_education'),
    path('<pk>/update/', UpdateEducationView.as_view(), name='update_education'),
    path('<pk>/destroy/', DestroyEducationView.as_view(), name='destroy_education'),
    path('<pk>/details/', EducationDetails.as_view(), name='education_details'),

    # URLs for CRUD operations on Project model
    path('list/', ListProjectView.as_view(), name='list_project'),
    path('create/', CreateProjectView.as_view(), name='create_project'),
    path('<pk>/update/', UpdateProjectView.as_view(), name='update_project'),
    path('<pk>/destroy/', DestroyProjectView.as_view(), name='destroy_project'),
    path('<pk>/details/', ProjectDetails.as_view(), name='project_details'),

    # URLs for CRUD operations on SocialLink model
    path('list/', ListSocialLinkView.as_view(), name='list_social_link'),
    path('create/', CreateSocialLinkView.as_view(), name='create_social_link'),
    path('<pk>/update/', UpdateSocialLinkView.as_view(), name='update_social_link'),
    path('<pk>/destroy/', DestroySocialLinkView.as_view(), name='destroy_social_link'),
    path('<pk>/details/', SocialLinkDetails.as_view(), name='social_link_details'),


]