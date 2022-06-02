from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Game
from .serializers import GameSerializer

class GamesAPIView(APIView):
    """
    API de jogos do e-commerce
    Todos os Jogos
    As rotas são:
    api/games/
    api/games/score/
    api/games/price/
    api/games/alphabetic/
    """
    serializer_class = GameSerializer
    
    def get(self, request):
        try:
            id = request.query_params["id"]
            if id != None:
                car = Game.objects.get(id=id)
                serializer = GameSerializer(car)
        except:
            games = Game.objects.all()
            serializer = GameSerializer(games, many=True)
            
        return Response(serializer.data)
    
    def post(self, request):
        serializer = GameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    
class GamesAPIPriceView(APIView):
    """
    API de jogos do e-commerce
    Todos os Jogos
    As rotas são:
    api/games/
    api/games/score/
    api/games/price/
    api/games/alphabetic/
    """
    
    def get(self, request):
        games = Game.objects.filter().order_by('price')
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)
    

class GamesAPIScoreView(APIView):
    """
    API de jogos do e-commerce
    Todos os Jogos
    As rotas são:
    api/games/
    api/games/score/
    api/games/price/
    api/games/alphabetic/
    """
    
    def get(self, request):
        games = Game.objects.filter().order_by('-score')
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)


class GamesAPIAlphabeticView(APIView):
    """
    API de jogos do e-commerce
    Todos os Jogos
    As rotas são:
    api/games/
    api/games/score/
    api/games/price/
    api/games/alphabetic/
    """
    
    def get(self, request):
        games = Game.objects.filter().order_by('name')
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)