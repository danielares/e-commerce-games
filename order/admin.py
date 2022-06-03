from django.contrib import admin

from .models import Order, OrderItem


@admin.register(Order)
class GameAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    
    
@admin.register(OrderItem)
class GameAdmin(admin.ModelAdmin):
    list_display = ('item', 'order', 'quantity')
    