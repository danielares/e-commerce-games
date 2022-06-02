from django.urls import path

from .views import OrdersView, CartView


urlpatterns = [
    path('my-orders/', OrdersView.as_view(), name='my-orders'),
    path('my-cart/', CartView.as_view(), name='cart-view'),
]