from django.db import models
from datetime import datetime
from django.core.validators import validate_email


class Metric(models.Model):
    name = models.CharField(max_length=400, blank=False, verbose_name='Название')
    visible = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def last_value(self):
        try:
            return self.value_set.all().filter().order_by('-pk')[0]
        except Exception as e:
            print(e)
            return "??"


class Value(models.Model):
    body = models.IntegerField(default=0, verbose_name="Значение")
    metric = models.ForeignKey(Metric)
    time = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return str(self.body)