from django.db import models

class Presentation(models.Model):
    image = models.ImageField(upload_to='presentation_images/')
    title = models.CharField(max_length=255)
    description = models.TextField()
    firstname = models.CharField(max_length=255,default='')
    name = models.CharField(max_length=255,default='')
    age = models.CharField(max_length=255,default='')
    job = models.CharField(max_length=255,default='')

    def __str__(self):
        return self.title

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
    location = models.CharField(max_length=100, default='')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    description = models.TextField()

    def __str__(self):
        return self.title

class Education(models.Model):
    ONGOING = 'ongoing'
    TERMINATED = 'terminated'
    
    STATUS_CHOICES = [
        (ONGOING, 'Ongoing'),
        (TERMINATED, 'Terminated'),
    ]
    date = models.CharField(max_length=50)
    imageSrc = models.ImageField(upload_to='education_images/')
    title = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    description = models.TextField()

    def __str__(self):
        return self.title

class Project(models.Model):
    name = models.CharField(max_length=255)
    imageSrc = models.ImageField(upload_to='project_images/')
    description = models.TextField(default='')
    techs = models.CharField(max_length=255)
    github = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class SocialLink(models.Model):
    iconSrc = models.FileField(max_length=255, default='social_icons')
    name = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
