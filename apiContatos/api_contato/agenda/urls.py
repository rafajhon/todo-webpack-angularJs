from django.urls import path
from . import views

app_name = 'agenda'

urlpatterns = [
    path('listar', views.ListarContatoView.as_view(), name='contato_listar'),
    path('adicionar', views.CadastrarContatoView.as_view(), name='contato_adicionar')
    ]
