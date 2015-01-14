from django.db import models
from datetime import datetime
from django.core.validators import validate_email


class Metric(models.Model):
    name = models.CharField(max_length=400, blank=False)

    def last_value(self):
        return self.value_set.all().filter().order_by('-pk').get().body


class Value(models.Model):
    body = models.IntegerField(default=0)
    metric = models.ForeignKey(Metric)
    time = models.DateTimeField(default=datetime.now())