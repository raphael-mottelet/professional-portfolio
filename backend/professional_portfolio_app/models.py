from django.db import models

class Experience(models.Model):
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='education_images/')  # Assuming imageSrc is an image file
    iconsSrc = models.CharField(max_length=255)  # Assuming iconsSrc is a URL
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

class Education(models.Model):
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='education_images/')  # Assuming imageSrc is an image file
    title = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

class Project(models.Model):
    name = models.CharField(max_length=255)
    imageSrc = models.ImageField(upload_to='project_images/')  # Assuming imageSrc is an image file
    techs = models.CharField(max_length=255)
    github = models.URLField(blank=True, null=True)

class SocialLink(models.Model):
    iconSrc = models.CharField(max_length=255)  # Assuming iconSrc is a URL
    name = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)
