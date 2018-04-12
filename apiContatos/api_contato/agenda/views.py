from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Contato
from json import loads
from django.utils.decorators import method_decorator
from .forms import ContatoForm
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


class ListarContatoView(View):

    def get(self, request):
        contatos = Contato.objects.all()
        contexto = {
            'status': 200,
            'content':{
                'contatos': [
                contato.serialize_custume_json() for contato in contatos]
            }
        }
        return JsonResponse(contexto)


@method_decorator(csrf_exempt, name='dispatch')
class CadastrarContatoView(View):

    def post(self, request):
        form = ContatoForm(loads(request.body))
        if form.is_valid():
            form.save()
            contexto = {
                'status':201,
                'content':{
                    'mensagem': 'Contato salvo com sucesso.'
                }
            }
            return JsonResponse(contexto)
        contexto = {
            'status':400,
            'content':{
                'mensagem': form.errors
            }
        }
        return JsonResponse(contexto,status=201)
