from rest_framework import serializers

from .models import Game


class GameSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Game
        fields = (
            'id',
            'created_at',
            'updated_at',
            'active',
            'name',
            'price',
            'score',
            'image',
        )