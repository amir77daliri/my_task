from django.urls import path
from .api import CreateCurrency
from .views import change_random


urlpatterns = [
    path('create-currency/', CreateCurrency.as_view()),
    path('test', change_random)
]
