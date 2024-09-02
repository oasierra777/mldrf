from django.urls import path

from apps.user.views import CreateUserProfileView
from apps.user.views import DetailUserProfileView


urlpatterns = [
    path('create', CreateUserProfileView.as_view()),
    path('profile/<account>', DetailUserProfileView.as_view()),
]