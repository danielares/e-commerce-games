# Generated by Django 4.0.4 on 2022-06-02 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0002_alter_game_score'),
        ('order', '0002_remove_order_ordered'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='item',
            field=models.ManyToManyField(to='games.game'),
        ),
    ]
