from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.settings import api_settings

from .serializers import UserSerializer
from .models import CustomUser


class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(self.request.user)
        return Response(serializer.data)
    