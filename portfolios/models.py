from django.db import models
from django.utils.text import slugify

# Create your models here.
class PortfolioTemplate(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    thumbnail_url = models.URLField()
    multimedia_url = models.URLField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    certifications = models.JSONField(blank=True, null=True)
    code_url = models.URLField(blank=True, null=True)
    # slug = models.SlugField(blank=True, null=True)    # Slug for unique URL
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
