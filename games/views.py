from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Game
from .serializers import GameSerializer

class GamesAPIView(APIView):
    """
    API de jogos do e-commerce
    """
    
    def get(self, request):
        games = Game.objects.all()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = GameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)