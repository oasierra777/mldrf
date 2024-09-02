from django.urls import path

from apps.ml.views import PreProcesamientoView
from apps.ml.views import RegresionLinealView

urlpatterns = [
    path('pre-procesamiento', PreProcesamientoView.as_view()),
    path('regresion-lineal', RegresionLinealView.as_view())
]
