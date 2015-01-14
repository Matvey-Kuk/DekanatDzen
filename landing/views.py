from django.shortcuts import render

from landing.models import Metric, Value

def index(request):
    metrics = Metric.objects.all()
    block_width_percent = 100 / len(metrics)
    return render(request, 'index.html',
        {
            'metrics': metrics,
            'block_width_percent': block_width_percent
        }
    )