from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer

from .models import Order
from games.serializers import GameSerializer

class OrderSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    item = GameSerializer(many=True)
    class Meta:
        model = Order
        fields = (
            'id',
            'created_at',
            'updated_at',
            'active',
            'user',
            'shipping',
            'price',
            'final_price',
            'status_order',
            'item'
        )


class PriceOrderSerializer(serializers.Serializer):
   price = serializers.DecimalField(max_digits=10, decimal_places=2)
   shipping = serializers.DecimalField(max_digits=10, decimal_places=2)
   final_price = serializers.DecimalField(max_digits=10, decimal_places=2)