# Generated by Django 5.0.6 on 2024-05-23 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professional_portfolio_app', '0013_alter_education_imagesrc_alter_experience_imagesrc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='presentation',
            name='age',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='presentation',
            name='firstname',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='presentation',
            name='job',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='presentation',
            name='name',
            field=models.CharField(default='', max_length=255),
        ),
    ]
