from channels.generic.websocket import AsyncWebsocketConsumer
import json


class CurrencyConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        await self.accept()

    async def disconnect(self, code):
        print(f'client {code} disconnect')

    async def receive(self, text_data=None, bytes_data=None):
        message = "data from django"
        await self.send(text_data=json.dumps({"message": message}))
    