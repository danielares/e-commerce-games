from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Base(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateField(auto_now=True)
    active = models.BooleanField(default=True)
    
    class Meta:
        abstract = True
        

class Game(Base):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    score = models.IntegerField(validators=[MaxValueValidator(500), MinValueValidator(0)])
    image = models.ImageField(blank=True, upload_to='images')
    
    class Meta:
        verbose_name = 'Game'
        verbose_name_plural = 'Games'
        
    def __str__(self):
        return self.name