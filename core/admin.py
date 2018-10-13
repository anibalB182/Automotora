from django.contrib import admin
from .models import Marca, Automovil
# Register your models here.

#configuramos la entidad auyomovil en el admin django
class AutomovilAdmin(admin.ModelAdmin):
    #en las tuplas los elementos no son modificables
    list_display = ('patente','anio', 'modelo')
    #agregamos una caja de busqueda
    search_fields = ['patente','modelo']


admin.site.register(Marca)
admin.site.register(Automovil, AutomovilAdmin)
