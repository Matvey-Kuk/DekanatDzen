from django.shortcuts import render

from landing.models import Metric, Value, Video


def index(request):
    metrics = Metric.objects.filter(visible=True).all()
    try:
        block_width_percent = 100 / len(metrics)
    except Exception:
        block_width_percent = 100

    try:
        actual_video_name = Video.objects.filter(enabled=True).all()[0].file_name
    except Exception:
        actual_video_name = "ocean"

    return render(request, 'index.html',
        {
            'metrics': metrics,
            'block_width_percent': block_width_percent,
            'actual_video_name': actual_video_name
        }
    )