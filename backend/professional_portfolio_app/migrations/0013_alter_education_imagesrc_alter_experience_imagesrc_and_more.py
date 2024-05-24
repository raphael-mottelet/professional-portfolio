# Generated by Django 5.0.6 on 2024-05-22 23:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professional_portfolio_app', '0012_alter_education_imagesrc_alter_experience_imagesrc_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='imageSrc',
            field=models.ImageField(upload_to='education_images/'),
        ),
        migrations.AlterField(
            model_name='experience',
            name='imageSrc',
            field=models.ImageField(default='default_image.jpg', upload_to='experience_images/'),
        ),
        migrations.AlterField(
            model_name='presentation',
            name='image',
            field=models.ImageField(upload_to='presentation_images/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='imageSrc',
            field=models.ImageField(upload_to='project_images/'),
        ),
    ]
