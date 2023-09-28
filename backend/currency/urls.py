from django.urls import path
from .api import CreateCurrency

urlpatterns = [
    path('create-currency/', CreateCurrency.as_view()),
]
