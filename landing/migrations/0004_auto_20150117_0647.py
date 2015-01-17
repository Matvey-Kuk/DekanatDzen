# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0003_auto_20150115_2009'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('file_name', models.CharField(verbose_name='Название видеофайла', max_length=400)),
                ('enabled', models.BooleanField(default=False)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='metric',
            name='visible',
            field=models.BooleanField(default=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='value',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 17, 6, 47, 39, 403884)),
            preserve_default=True,
        ),
    ]
