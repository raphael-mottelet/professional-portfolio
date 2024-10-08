# Generated by Django 5.0.1 on 2024-05-17 10:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professional_portfolio_app', '0009_gptmessagehistory'),
    ]

    operations = [
        migrations.CreateModel(
            name='GPTConversation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('input_text', models.TextField()),
                ('response_text', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.GenericIPAddressField()),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='GPTMessageHistory',
        ),
        migrations.AddField(
            model_name='gptconversation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='professional_portfolio_app.user'),
        ),
    ]
