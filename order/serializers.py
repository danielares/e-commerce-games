from rest_framework import serializers

from .models import OrderItem, Cart


class OrderItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OrderItem
        fields = (
            'id',
            'created_at',
            'updated_at',
            'active',
            'user',
            'ordered',
            'item',
            'quantity',
        )


class CartSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Cart
        fields = (
            'id',
            'created_at',
            'updated_at',
            'active',
            'user',
            'item',
            'quantity',
            'price',
        )