from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/games/', include('games.urls')),
    path('api/users/', include('users.urls')),
    path('api/order/', include('order.urls')),
    
    
    path('games/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('logout/', TemplateView.as_view(template_name='index.html')),
    path('signup/', TemplateView.as_view(template_name='index.html')),
    path('my-orders/', TemplateView.as_view(template_name='index.html')),
    path('cart/', TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)