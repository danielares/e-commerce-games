# Generated by Django 4.0.4 on 2022-06-04 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0006_finalorder_alter_order_final_price_alter_order_price_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='finalorder',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='finalorder',
            name='shipping',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='order',
            name='final_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='order',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='order',
            name='shipping',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]