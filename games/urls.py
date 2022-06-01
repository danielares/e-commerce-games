from django.urls import path

from .views import GamesAPIView, GamesAPIPriceView, GamesAPIScoreView, GamesAPIAlphabeticView

urlpatterns = [
    path('games/', GamesAPIView.as_view(), name='games'),
    path('games/price/', GamesAPIPriceView.as_view(), name='games-price'),
    path('games/score/', GamesAPIScoreView.as_view(), name='games-score'),
    path('games/alphabetic/', GamesAPIAlphabeticView.as_view(), name='games-alphabetic'),
]