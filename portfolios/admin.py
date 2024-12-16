from django.contrib import admin
from .models import PortfolioTemplate

@admin.register(PortfolioTemplate)
class PortfolioTemplateAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'thumbnail_url', 'multimedia_url', 'skills', 'certifications','code_url', 'created_at']
    search_fields = ['name', 'skills']
# Register your models here.
