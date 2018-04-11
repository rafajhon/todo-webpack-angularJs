from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Contato
from json import dump
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


class ListarContatoView(View):

    def get(self, request):
        contatos = Contato.objects.all()
        contexto = {
            'status': 200,
            'content':{
                'contatos': [contato.serialize_custume_json() for contato in contatos]
            }
        }
        return JsonResponse(contexto)
