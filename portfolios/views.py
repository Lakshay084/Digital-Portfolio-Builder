from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import PortfolioTemplate
from .serializers import PortfolioTemplateSerializer

@api_view(['GET'])
def template_list(request):
    templates = PortfolioTemplate.objects.all()
    serializer = PortfolioTemplateSerializer(templates, many=True)
    return Response(serializer.data)


def portfolio_detail(request, slug):
    template = get_object_or_404(PortfolioTemplate, slug=slug)
    return JsonResponse({
        "name": template.name,
        "description": template.description,
        "thumbnail_url": template.thumbnail_url,
        "multimedia_url": template.multimedia_url,
        "skills": template.skills,
        "certifications": template.certifications,
        "code_url": template.code_url,
    })
# Create your views here.
