# Generated by Django 4.0.4 on 2022-06-02 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_order_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='final_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10),
        ),
    ]
