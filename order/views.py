from telnetlib import STATUS
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import OrderItem, Cart
from .serializers import OrderItemSerializer, CartSerializer


class OrdersView(APIView):
    def get(self, request):
        user_id = self.request.user.id
        print(user_id)
        order = OrderItem.objects.filter(user=user_id)
        serializer = OrderItemSerializer(order, many=True)
        return Response(serializer.data)
    

class CartView(APIView):
    def get(self, request):
        user_id = self.request.user.id
        print(user_id)
        order = Cart.objects.filter(user=user_id)
        serializer = CartSerializer(order, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CartSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    