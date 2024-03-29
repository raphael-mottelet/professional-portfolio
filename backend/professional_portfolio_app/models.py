from django.db import models
from django.utils import timezone
import uuid

from django.db import models

class Experience(models.Model):
    ONGOING = 'ongoing'
    TERMINATED = 'terminated'
    
    STATUS_CHOICES = [
        (ONGOING, 'Ongoing'),
        (TERMINATED, 'Terminated'),
    ]
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='experience_images/', default='default_image.jpg')
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=100,default='')  # Define the location field
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    description = models.TextField()

    def __str__(self):
        return self.title


class Education(models.Model):
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='education_images/')
    title = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title
    
class Project(models.Model):
    name = models.CharField(max_length=255)
    imageSrc = models.ImageField(upload_to='project_images/')
    techs = models.CharField(max_length=255)
    github = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class SocialLink(models.Model):
    iconSrc = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
