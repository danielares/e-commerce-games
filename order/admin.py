from django.contrib import admin

from .models import OrderItem, Cart


@admin.register(OrderItem)
class GameAdmin(admin.ModelAdmin):
    list_display = ('item', 'quantity', 'user', 'created_at')
    

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('item',)
