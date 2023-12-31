from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from .models import Currency
from .serializers import InputCurrencyDataSerializer


class CreateCurrency(APIView):
    """
        API View to Create currency -- data come from react app
    """
    def post(self, request):
        obj_data = InputCurrencyDataSerializer(data=request.data)
        obj_data.is_valid(raise_exception=True)
        try:
            Currency.objects.create(
                name=obj_data.validated_data['currency_name'],
                author_email=obj_data.validated_data['author_email'],
                content=obj_data.validated_data['content']
            )
        except Exception as e:
            return Response({'msg': 'ارز مورد نظر در پایگاه داده موجود است!'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'msg': 'ok!'}, status=status.HTTP_201_CREATED)
