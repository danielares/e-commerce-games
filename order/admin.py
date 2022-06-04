from django.contrib import admin

from .models import Order


@admin.register(Order)
class GameAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    