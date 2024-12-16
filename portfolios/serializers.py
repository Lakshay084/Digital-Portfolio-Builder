from rest_framework import serializers
from .models import PortfolioTemplate

class PortfolioTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioTemplate
        fields = '__all__'