# Generated by Django 5.1.4 on 2024-12-16 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0004_portfoliotemplate_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfoliotemplate',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]
