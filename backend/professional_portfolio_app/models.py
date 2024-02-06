from django.db import models

class Experience(models.Model):
    Experience_id = models.AutoField(primary_key=True)
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='experience_images/')  # Assuming imageSrc is an image file
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

class Education(models.Model):
    Education_id = models.AutoField(primary_key=True)
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='education_images/')  # Assuming imageSrc is an image file
    title = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()

class Project(models.Model):
    Project_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    imageSrc = models.ImageField(upload_to='project_images/')  # Assuming imageSrc is an image file
    techs = models.CharField(max_length=255)
    github = models.URLField(blank=True, null=True)

class SocialLink(models.Model):
    Social_link_id = models.AutoField(primary_key=True)
    iconSrc = models.CharField(max_length=255)  # Assuming iconSrc is a URL
    name = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)
