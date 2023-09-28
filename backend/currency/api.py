from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from .models import Currency


class CreateCurrency(APIView):
    """
        API View to Create currency -- data come from react app
    """
    class InputSerializer(serializers.Serializer):
        name = serializers.CharField(max_length=100)
        content = serializers.CharField(max_length=10000)
        email = serializers.EmailField()

    def post(self, request):
        obj_data = self.InputSerializer(data=request.data)
        obj_data.is_valid(raise_exception=True)
        try:
            Currency.objects.create(
                name=obj_data.validated_data['name'],
                author_email=obj_data.validated_data['email'],
                content=obj_data.validated_data['content']
            )
        except Exception as e:
            return Response({'msg': 'something goes wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({'msg': 'ok!'}, status=status.HTTP_200_OK)
