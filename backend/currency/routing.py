from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path("ws/get-cuurency/", consumers.CurrencyConsumer.as_asgi()),
]
