from django.urls import path

from .views import GamesAPIView, GamesAPIPriceCresView, GamesAPIScoreView, GamesAPIAlphabeticView, GamesAPIPriceDesView

urlpatterns = [
    path('', GamesAPIView.as_view(), name='games'),
    path('price-cres/', GamesAPIPriceCresView.as_view(), name='games-price'),
    path('price-des/', GamesAPIPriceDesView.as_view(), name='games-price'),
    path('score/', GamesAPIScoreView.as_view(), name='games-score'),
    path('alphabetic/', GamesAPIAlphabeticView.as_view(), name='games-alphabetic'),
]