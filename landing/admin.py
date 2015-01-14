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
#
# class KnownDoctorAdmin(admin.ModelAdmin):
#     list_display = ['description', 'validated', 'used']
#
# admin.site.register(Lead, LeadAdmin)
# admin.site.register(KnownDoctor, KnownDoctorAdmin)

admin.site.register(Metric)
admin.site.register(Value)