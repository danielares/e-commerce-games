from django.urls import path

from .views import OrdersView, CartView, CartDetailView, CheckoutView


urlpatterns = [
    path('cart/', CartView.as_view(), name='my-orders'),
    path('cart/<int:id>', CartDetailView.as_view(), name='my-orders'),
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('my-orders/', OrdersView.as_view(), name='my-orders')
]