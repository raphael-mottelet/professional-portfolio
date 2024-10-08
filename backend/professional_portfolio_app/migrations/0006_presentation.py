# Generated by Django 5.0.1 on 2024-05-09 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professional_portfolio_app', '0005_education_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Presentation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='presentation_images/')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
    ]
