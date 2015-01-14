# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='value',
            old_name='name',
            new_name='body',
        ),
        migrations.AlterField(
            model_name='value',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 14, 18, 24, 15, 771197)),
            preserve_default=True,
        ),
    ]
