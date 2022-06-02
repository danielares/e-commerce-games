from django.urls import include, path

from .views import CurrentUserView


urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),    
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('current-user/', CurrentUserView.as_view(), name='current-user'),
]