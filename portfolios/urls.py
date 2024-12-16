from django.urls import path
from .views import template_list, portfolio_detail

urlpatterns = [
    path('templates/', template_list, name='template-list'),
    path('templates/<slug:slug>/', portfolio_detail, name='portfolio-detail'),
]
