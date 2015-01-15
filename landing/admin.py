from django.contrib import admin

from landing.models import Metric, Value


# class KnownDoctorInline(admin.StackedInline):
#     model = KnownDoctor
#     extra = 0
#
# class LeadAdmin(admin.ModelAdmin):
#     fields = ['name', 'mail', 'date']
#     list_display = ['name', 'mail', 'date', 'amount_of_known_doctors']
#     inlines = [KnownDoctorInline]
#

class ValueAdmin(admin.ModelAdmin):
    list_display = ['body', 'metric', 'time']


class MetricAdmin(admin.ModelAdmin):
    list_display = ['name', 'visible']


admin.site.register(Metric, MetricAdmin)
admin.site.register(Value, ValueAdmin)