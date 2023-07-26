# Generated by Django 4.2.2 on 2023-07-26 14:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks', '0004_enviar2'),
    ]

    operations = [
        migrations.CreateModel(
            name='enviar3',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destinatario', models.CharField(max_length=15)),
                ('monto', models.CharField(max_length=30)),
                ('descripcion', models.TextField(blank=True)),
                ('nombre', models.CharField(max_length=30)),
                ('nombreUser', models.CharField(max_length=30)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]