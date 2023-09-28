# Generated by Django 4.2.5 on 2023-09-28 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('price', models.IntegerField(default=10000)),
                ('author_email', models.EmailField(max_length=254)),
                ('content', models.TextField()),
                ('change_price', models.IntegerField(default=0)),
            ],
        ),
    ]
