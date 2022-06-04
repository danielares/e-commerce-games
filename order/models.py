from django.db import models
from django.conf import settings

from games.models import Game
from games.models import Base


class Order(Base):
    CHOICES = (
        ('done','Done'),
        ('cart','Cart'),
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    shipping = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    final_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    status_order = models.CharField(max_length=50, choices=CHOICES, default='cart')
    item = models.ManyToManyField(Game)
    
    def save(self, *args, **kwargs):
        if self.price >= 250:
            self.shipping = 0

        self.final_price = self.price + self.shipping
        super().save(*args, **kwargs)