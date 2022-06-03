from rest_framework import serializers

from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    
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