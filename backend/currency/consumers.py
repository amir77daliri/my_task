import json
from .serializers import OutputCurrencyDataSerializer
from .models import Currency
from channels.generic.websocket import AsyncWebsocketConsumer


class CurrencyConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.group_name = "take_currencies_group"
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def receive(self, text_data=None, bytes_data=None):
        message = "i am django"
        await self.send(json.dumps({'msg': message}))

    async def take_currencies(self, event):
        data = event['data']
        await self.send(json.dumps(data))
