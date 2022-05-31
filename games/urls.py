from django.urls import path

from .views import GamesAPIView

urlpatterns = [
    path('games/', GamesAPIView.as_view(), name='games')
]