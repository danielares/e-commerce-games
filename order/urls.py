from django.urls import path

from .views import OrdersView, CartView, CartDetailView


urlpatterns = [
    path('cart/', CartView.as_view(), name='my-orders'),
    path('cart/<int:id>', CartDetailView.as_view(), name='my-orders'),
    path('my-orders/', OrdersView.as_view(), name='my-orders'),
]