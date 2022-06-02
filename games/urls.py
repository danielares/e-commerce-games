from django.urls import path

from .views import GamesAPIView, GamesAPIPriceView, GamesAPIScoreView, GamesAPIAlphabeticView

urlpatterns = [
    path('', GamesAPIView.as_view(), name='games'),
    path('price/', GamesAPIPriceView.as_view(), name='games-price'),
    path('score/', GamesAPIScoreView.as_view(), name='games-score'),
    path('alphabetic/', GamesAPIAlphabeticView.as_view(), name='games-alphabetic'),
]