from rest_framework import serializers
from .models import Currency


class InputCurrencyDataSerializer(serializers.Serializer):
    currency_name = serializers.CharField(max_length=100)
    content = serializers.CharField(max_length=10000)
    author_email = serializers.EmailField()


class OutputCurrencyDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = Currency
        fields = "__all__"
