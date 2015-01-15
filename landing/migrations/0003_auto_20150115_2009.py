# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0002_auto_20150114_1824'),
    ]

    operations = [
        migrations.AddField(
            model_name='metric',
            name='visible',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='metric',
            name='name',
            field=models.CharField(max_length=400, verbose_name='Название'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='value',
            name='body',
            field=models.IntegerField(default=0, verbose_name='Значение'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='value',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 15, 20, 9, 15, 847878)),
            preserve_default=True,
        ),
    ]
