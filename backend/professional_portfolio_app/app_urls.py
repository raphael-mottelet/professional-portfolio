from django.urls import path

from professional_portfolio_app.views import (ListExperienceView, CreateExperienceView, UpdateExperienceView, DestroyExperienceView, ExperienceDetails,
                                              ListEducationView, CreateEducationView, UpdateEducationView, DestroyEducationView, EducationDetails,
                                              ListProjectView, CreateProjectView, UpdateProjectView, DestroyProjectView, ProjectDetails,
                                              ListSocialLinkView, CreateSocialLinkView, UpdateSocialLinkView, DestroySocialLinkView, SocialLinkDetails,
                                              ListPresentationView, CreatePresentationView, UpdatePresentationView, DestroyPresentationView, PresentationDetails)


urlpatterns = [

    path('presentation/list/', ListPresentationView.as_view(), name='list_presentation'),
    path('presentation/create/', CreatePresentationView.as_view(), name='create_presentation'),
    path('presentation/<pk>/update/', UpdatePresentationView.as_view(), name='update_presentation'),
    path('presentation/<pk>/destroy/', DestroyPresentationView.as_view(), name='destroy_presentation'),
    path('presentation/<pk>/details/', PresentationDetails.as_view(), name='presentation_details'),

    path('experience/list/', ListExperienceView.as_view(), name='list_experience'),
    path('experience/create/', CreateExperienceView.as_view(), name='create_experience'),
    path('experience/<pk>/update/', UpdateExperienceView.as_view(), name='update_experience'),
    path('experience/<pk>/destroy/', DestroyExperienceView.as_view(), name='destroy_experience'),
    path('experience/<pk>/details/', ExperienceDetails.as_view(), name='experience_details'),

    path('education/list/', ListEducationView.as_view(), name='list_education'),
    path('education/create/', CreateEducationView.as_view(), name='create_education'),
    path('education/<pk>/update/', UpdateEducationView.as_view(), name='update_education'),
    path('education/<pk>/destroy/', DestroyEducationView.as_view(), name='destroy_education'),
    path('education/<pk>/details/', EducationDetails.as_view(), name='education_details'),

    path('projects/list/', ListProjectView.as_view(), name='list_project'),
    path('projects/create/', CreateProjectView.as_view(), name='create_project'),
    path('projects/<pk>/update/', UpdateProjectView.as_view(), name='update_project'),
    path('projects/<pk>/destroy/', DestroyProjectView.as_view(), name='destroy_project'),
    path('projects/<pk>/details/', ProjectDetails.as_view(), name='project_details'),

    path('social-links/list/', ListSocialLinkView.as_view(), name='list_social_link'),
    path('social-links/create/', CreateSocialLinkView.as_view(), name='create_social_link'),
    path('social-links/<pk>/update/', UpdateSocialLinkView.as_view(), name='update_social_link'),
    path('social-links/<pk>/destroy/', DestroySocialLinkView.as_view(), name='destroy_social_link'),
    path('social-links/<pk>/details/', SocialLinkDetails.as_view(), name='social_link_details'),


]