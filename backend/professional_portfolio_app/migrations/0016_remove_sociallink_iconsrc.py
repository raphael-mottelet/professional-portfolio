# Generated by Django 5.0.6 on 2024-05-23 13:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('professional_portfolio_app', '0015_sociallink_icon_class'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sociallink',
            name='iconSrc',
        ),
    ]
