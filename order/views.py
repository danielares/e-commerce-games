from telnetlib import STATUS
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Order
from .serializers import OrderSerializer
from games.models import Game


class OrdersView(APIView):
    def get(self, request):
        user_id = self.request.user.id
        order = Order.objects.filter(user=user_id, status_order='done')
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        serializer = OrderSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    
class CartView(APIView):
    def get(self, request):
        user_id = self.request.user.id
        order = Order.objects.filter(user=user_id, status_order='cart')
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        

class CartDetailView(APIView):
    
    def get(self, request, id):
        user_id = self.request.user.id
        order = Order.objects.filter(user=user_id, status_order='cart', id=id)
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id):
        user_id = self.request.user.id
        order = Order.objects.filter(user=user_id, status_order='cart', id=id)
        order.delete()
        return Response({'message': 'Jogo removido do carrinho'})


class CheckoutView(APIView):
    def get(self, request):
        user_id = self.request.user.id
        order = Order.objects.filter(user=user_id, status_order='cart')
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)
    
    def patch(self, request):
        user_id = self.request.user.id
        orders = Order.objects.filter(user=user_id, status_order='cart')
        print(orders)
        for order in orders:
            order.status_order = 'done'
            order.save()
        return Response({'message': 'Jogo removido do carrinho'})

        

    