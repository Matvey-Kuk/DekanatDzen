# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Metric',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=400)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Value',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.IntegerField(default=0)),
                ('time', models.DateTimeField(default=datetime.datetime(2015, 1, 14, 17, 47, 44, 951742))),
                ('metric', models.ForeignKey(to='landing.Metric')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
